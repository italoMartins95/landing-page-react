import GoogleMaps from '../googleMap/googleMap.component';
import './footer.component.scss';

function Footer(){
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
                    <GoogleMaps lat={-8.017213878492964}
                                lng={-34.96859181634934}
                    />
                </div>
            </aside>
        </footer>
    )
}

export default Footer;