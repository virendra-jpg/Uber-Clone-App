import { useEffect,useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import {auth} from '../firebase'
import { useRouter } from 'next/router'
import { onAuthStateChanged, signOut } from "firebase/auth";
export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser({
            name: user.displayName,
            photoUrl: user.photoURL
          })
          console.log(user)
      } else {
        router.push("/login")
      }
    });

    return ()=> unsubscribe()
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />

          <UserProfile>
            <Name>{user && user.name}</Name>

            <Profile src={user && user.photoUrl} onClick={()=>signOut(auth)}/>
          </UserProfile>
        </Header>

        <ActionButtons>
          <Link href="/Search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1
`;

const Header = tw.div`
flex justify-between items-center background-color
`;
const UberLogo = tw.img`
h-20
`;
const Name = tw.div`
mr-4 w-20 text-sm
`;
const Profile = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;
const UserProfile = tw.div`
flex items-center
`;
const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
