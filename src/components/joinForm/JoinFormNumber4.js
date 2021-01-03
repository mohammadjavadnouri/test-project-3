import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterCompleteSVG from './RegisterCompleteSVG';

const JoinFormNumber4 = () => (
    <Modal show={true} className="joinFormModal">

        <Modal.Body className="body">
        <RegisterCompleteSVG />

        <div className="title"><h5>ثبت نام با موفقیت انجام شد</h5></div>
        <div className="text">برای اعلام توضیحات با شما تماس خواهیم گرفت</div>
        </Modal.Body>

        <Modal.Footer className="footer">
            
            <Link to="/">
                <Button className="button" >
                برگشت
                </Button>
            </Link>
        </Modal.Footer>
    </Modal>
)
 
export default JoinFormNumber4;