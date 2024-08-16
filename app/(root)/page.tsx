import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn={firstName:'Rohan' ,lastName:'Sharma',email:'satyarohanprakash@gmail.com'};
  return (
    <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName||'guest'}
            subtext="access and manage your accounts and transactions efficiently"
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={82000}
            />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]} 
        banks={[{currentBalance:12500},{currentBalance:14588}]}
        />
      </section>
        
  )
}

export default Home