import { NavLink, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import MessageDes from './MessageDes';
import MessageTit from './MessTit';
const MessageNav = () => {

    const [message, setMessage] = useState([{ title: 'Airtel', description: 'Airtel is an indian company' }, { title: 'Jio', description: 'Jio is also an indian company' }, { title: 'Vi', description: 'Vi is a Uk based company' }])
    const mesTitle = message.map((item) => {
        return item.title
    })
    const mesDes = message.map((item) => {
        return item.description
    })
    return (
        <>
            <div>
                <span>Title&nbsp;&nbsp;&nbsp;<NavLink to={"/message/title"}>View Tit...</NavLink></span><br /><br />
                <span>Description&nbsp;&nbsp;&nbsp;<NavLink to={"/message/description"}>View Des...</NavLink></span><br /><br />
            </div>
            <div>
                < Switch >
                    <Route path='/message/title' >
                        <MessageTit titleData={mesTitle} />
                    </Route>
                    <Route path='/message/description' >
                        <MessageDes descriptionData={mesDes} />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default MessageNav;