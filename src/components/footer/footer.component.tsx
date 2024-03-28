import location from '../../images/location.png'

import './footer.component.scss';

function Footer(){

    const runAddressMap = () => {
        window.open('https://maps.app.goo.gl/e2CWN329mEqiVUb2A', '_blank')
    }

    return(
        <footer>
            <aside className='left'>
                <div  className='contacts'>
                    <h3>
                        Contato
                    </h3>
                    <br />
                    <p>
                        (81) 9.9541-3050
                    </p>
                    <p>
                        italomartinssk88@gmail.com
                    </p>
                </div>
            </aside>
            <aside className='right'>                
                <div className='address'>
                    <p>Vila da Inabi, Camaragibe - PE</p>
                    <p>Rua grande Oriente, n° 284,</p>
                </div>
                <div className='mapFooter'>
                    <img src={location} onClick={runAddressMap}/>
                </div>
            </aside>
        </footer>
    )
}

export default Footer;