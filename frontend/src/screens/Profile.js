import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import { ARGENT_BANK } from '../constants.js';
import { useNavigate } from 'react-router-dom';

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i) rv[i] = arr[i];
  return rv;
}

export default function Profil() {
  const navigate = useNavigate();
  useEffect(() => {
    //TODO get token from store
    if (true) navigate('/profile');
  }, []);
  //TODO get user from store
  const firstName = 'john';
  const lastName = 'doe';

  //TODO get id from store
  const id = '6362708457c28472fbcb0b94';

  const argent = ARGENT_BANK.filter((elt) => elt.id === id);
  console.log(toObject(argent));

  const [editUser, setEditUser] = useState(false);

  const edit = () => {
    setEditUser(!editUser);
  };

  return (
    <div className="flex flex-col w-full h-auto bg-[#12002B]">
      <Header />

      <main className="mt-24 mb-12 w-full h-auto  flex justify-start items-center flex-col">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl text-center text-white font-bold">
            Welcome back <br></br> {firstName} {lastName}
          </h1>
          {editUser ? (
            <button
              onClick={edit}
              className="bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 "
            >
              Close
            </button>
          ) : (
            <button
              onClick={edit}
              className="bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 "
            >
              Edit Name
            </button>
          )}
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-4 ">
          {argent[0]?.accounts.map((elt, i) => (
            <Card
              key={uuidv4()}
              check={elt.check}
              credit={elt.credit}
              balance={elt.balance}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
