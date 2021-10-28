const MessageTit = (props) => {
    console.log(props.titleData)
    return (
        <>
            {
                props.titleData.map((data) => {
                    return (
                        <>
                            <span>{data}</span> <br />
                        </>
                    )
                })
            }
        </>
    )

}

export default MessageTit;