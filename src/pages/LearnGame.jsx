import '../assets/css/LearnGame.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import PhonePage from './PhonePage';

function LearnGame() {


    return (
        <>
            <section id='LearnGame-page-all'>
                <Navbar></Navbar>

                <div id='LearnGame-page'>
                    <div className='LearnGame-img-position'>
                        <img className='LearnGame-img-position-1' src="./images/GameDecoA.svg" alt="" />
                        <img className='LearnGame-img-position-2' src="./images/GameDecoB.svg" alt="" />
                        <img className='LearnGame-img-position-3' src="./images/GameDecoC.svg" alt="" />
                        <img className='LearnGame-img-position-4' src="./images/GameDecoD.svg" alt="" />
                        <img className='LearnGame-img-position-green' src="./images/greenBackB.svg" alt="" />
                        <img className='LearnGame-img-position-red' src="./images/redBackB.svg" alt="" />
                        <img className='LearnGame-img-position-pink' src="./images/pinkBackC.svg" alt="" />
                        <img className='LearnGame-img-position-blue' src="./images/blueA.svg" alt="" />

                    </div>
                    <div className='LearnGame-blackboard'>
                        <img className='LearnGame-img-position-5' src="./images/GameEraser.svg" alt="" />
                        <div className='LearnGame-content-1'>
                            <p>不間斷地提供題目，給予問答提供四個選項給你選擇，達成一定的數量將會有成就獎勵!</p>
                        </div>
                        <div className='LearnGame-content-2'>
                            <p>準備好挑戰了？</p>
                        </div>
                        <div className='LearnGame-ready-1'>
                            <div className='LearnGame-ready-bk-1'>
                                <img src="./images/GameChalk.svg" alt="" />
                                <Link to='/LearnHome'><p >需要再複習</p></Link>
                            </div>
                            <div className='LearnGame-ready-bk-2'>
                                <img src="./images/GameChalk.svg" alt="" />
                                <Link to="/LearnGameChoose"><p>準備好了</p></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <PhonePage></PhonePage>

        </>
    )
}

export default LearnGame