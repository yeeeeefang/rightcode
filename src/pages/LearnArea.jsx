import '../assets/css/LearnArea.css';
import { useEffect } from 'react';
import LearnArea1 from "../components/LearnArea1";
import LearnArea2 from '../components/LearnArea2';
import LearnArea3 from '../components/LearnArea3';
import LearnArea4 from '../components/LearnArea4';
import NavbarBack from '../components/NavbarBack';
import Footer from '../components/Footer';
import LearnAreaCollect from '../components/LearnAreaCollect';


function LearnArea() {
    //每次點到時，都是從頂部開始
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id="learnArea-a">
                <div className='lanav'>
                    <NavbarBack />
                </div>
                <div id='la1'>
                    <LearnArea1 />
                    <LearnArea2 />
                </div>
                <div>
                    <LearnArea3 />
                    <LearnArea4 />
                </div>
                <Footer/>
                <LearnAreaCollect/>
            </div>

        </>
    )
}
export default LearnArea