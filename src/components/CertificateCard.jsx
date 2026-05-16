import React from 'react'

const CertificateCard = (props) => {
  return (
    <>
       <div className="cert-card">

      <img src={props.image} alt="certificate" />

      <p>{props.title}</p>

    </div>
    </>
  )
}

export default CertificateCard
