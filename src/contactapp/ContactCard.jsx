import React from 'react'

const ContactCard = (props) => {

    const { selectedContact } = props; //destructure props

    return (
         <>
            <div className="contact__box">
                <h1 style={{textAlign: 'center', marginBottom: '.5rem', fontSize: '1.7rem'}}>Contact Profile</h1>
                    {
                        Object.keys(selectedContact).length > 0 && 
                            <div className='div'>
                                <img src={selectedContact.picture.large} alt='' width={150} height={150} style={{borderRadius: '100%'}} />
                                <p><b>Title:</b> {selectedContact.name.title}</p>
                                <p><b>ID:</b> {selectedContact.login.uuid.substr(-5)}</p>
                                <p><b>Name:</b> {selectedContact.name.first} {selectedContact.name.last}</p>
                                <p><b>Email:</b> {selectedContact.email}</p>
                                <p><b>Phone:</b> {selectedContact.phone}</p>
                                <p><b>Country:</b> {selectedContact.location.country}</p>
                                {/* <pre>{JSON.stringify(props.select)}</pre> */}
                            </div>
                    }
            </div>
         </>
    )
}

export default ContactCard

// import React from 'react'

// const ContactCard = (props) => {
//     return (
//         <>
//             <div className="contact__box">
//                 {
//                     Object.keys(props.selectedContact) > 0 && 
//                         <div className='div'>
//                             <img src={JSON.stringify(props.img)} alt='' width={40} height={40} />
//                             <p>SN: {JSON.stringify(props.sno).substr(-6)}</p>
//                             <p>Name: {JSON.stringify(props.name)}</p>
//                             <p>Email: {JSON.stringify(props.email)}</p>
//                             <p>Phone: {JSON.stringify(props.phone)}</p>
//                             <p>City: {JSON.stringify(props.location)}</p>
//                             {/* <pre>{JSON.stringify(props.select)}</pre> */}
//                         </div>
//                 }
//             </div>
//         </>
//     )
// }

// export default ContactCard
