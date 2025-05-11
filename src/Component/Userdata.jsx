import React from 'react';

const Userdata = (props) => {
  const { users, setusers } = props;

  const deleteHandler = (id) => {
    const copyusers = [...users];
    const filteredusers = copyusers.filter((user) => user.id != id);
    setusers(filteredusers);
};

  return (
    <div className="w-full mt-2  p-10 rounded-2xl flex flex-col gap- items-center ">
      
      {users.length !== 0 ? (
        users.map((user) => (        
            <li
            key={user.id}
            className="w-[100%] flex items-center justify-between bg-gray-700 rounded p-1 font-thin mb-3"
        >
            <p>
                <span className="block text-3xl mb-1">{user.name}</span>
                <small className="text-lg">{user.email}</small>
            </p>
            <button
              className="text-red-600 underline"
              onClick={() => deleteHandler(user.id)}
            >
              Delete
            </button>
        </li>))
        ):(
            <p className='text-red-500 text-2xl '>Data not found!</p>
        )}

    </div>
  );
};
export default Userdata;
