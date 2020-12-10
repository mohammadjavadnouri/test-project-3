import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div className="notfound">
        <h3 className="title">
            خطای 404!!  متاسفانه صفحه مورد نظر یافت نشد :(
        </h3>
        <Link to="/" className="homeLink">بازگشت به صفحه اصلی (خانه)</Link>
    </div>
)

export default NotFound;