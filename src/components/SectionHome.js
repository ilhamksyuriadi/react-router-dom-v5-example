import React from 'react'
import './SectionHome.css'
import { useHistory } from "react-router-dom";

const SectionHome = () => {
  // NOTES: this is useHistory hooks from react router dom, will explain later
  // docs: https://v5.reactrouter.com/web/api/Hooks/usehistory
  const history = useHistory();

  const handleNavigateToDetailPage = () => {
    history.push('/detail')
  }

  return (
    <section className='section-home'>
      <div>SectionHome</div>
      {/* NOTES: this button is example of how to navigate to other page from a button */}
      <button type='button' onClick={handleNavigateToDetailPage}>Click here to see detail page</button>
    </section>
  )
}

export default SectionHome