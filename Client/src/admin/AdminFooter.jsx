import React from 'react'

function Footer() {
  return (
    <footer className="bg-theme-red text-white">
      <div className="max-w-7xl m-auto px-4 py-2">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">HavenHub Admin</h1>
          </div>
          <div>
            <p className="text-sm">© 2021 HavenHub, Inc. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer