import React, { useState } from 'react';
import DropDownProfile from './UserDropdown';
import { User } from 'lucide-react';
function UserLoggedIcon() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="flex -space-x-1 overflow-hidden">
      <button className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out inline-block" onClick={() => setOpenProfile(prev => !prev)}>
        <User size={20} />
      </button>
      {openProfile && <DropDownProfile />}
    </div>
  );
}

export default UserLoggedIcon;