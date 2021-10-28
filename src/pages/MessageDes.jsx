const MessageDes = (props) => {

    return (
        <>
            {
                props.descriptionData.map((item) => {
                    return (
                        <>
                            <span>{item}</span> <br />
                        </>
                    )
                })
            }
        </>
    )

}

export default MessageDes;