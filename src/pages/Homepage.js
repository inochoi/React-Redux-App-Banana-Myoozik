import React from 'react';
import Home from '../components/Home';
import { Link } from 'react-router-dom';
import '../App.css';

const Homepage = () => {
    return (
        <div className='home'>
            <Home type="home" />
            <img id='background' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zOD8tNygtLisBCgoKDQ0NFQ0NFTcZFRkrKystLS0tKystKy0tKysrKysrKysvLSsrLS0rKysrKysrKysrLSs3LSstKy0rKy0rK//AABEIALEBHAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAgMBBAUHBv/EACQQAQEAAgAFAwUAAAAAAAAAAAARARICAwRS0RSSojEyYYHB/8QAGwEAAwEBAQEBAAAAAAAAAAAAAQIDAAQGBQf/xAAbEQEBAQEBAQEBAAAAAAAAAAAAARECURKRUv/aAAwDAQACEQMRAD8A+qUUlFQfTw9FJRWbD1tTorNh6KSis2HopKKzYeikooth6KSiiGHopKKZsPRSUUQw9FJRTRsPRSUUwYeikoo4GHopKKbGw9FJRRwMPRSVlNjYpRSUUcCnranRWwlUoqdbWwqdZSUV83Xfh62p0VtbFKykorNilZSUVmxSspKNhbD0UlFNAw9FJRTRsPsKSspoGKbDZOijI2KUbJ0U8DFKKnRRkDFKNk6KbGxSip0U2BilFToppAxSip1tNgHranRRwlUopKK2Ep62p1tbCVGip0V8h9XFKKnRWbFKKnRWbFKKnW0Y2HopKymgYpRU62mgYeip0U8bFKKnRTSBilFToppAxSip0U8gYpRU6KaQMUoqdFNI2KUVOinkDFKKnRTYClFJRRwlUoqdbWxOnranW1sTp6KSithLUaKSivia+1h6KSitrYeikrKLYpRSUU0DD0Umwp42HoqdFPAxSip0U0gYpRU6KeQMUoqdFPIGKUVOinkDFKKnRTSBilFTop5AxSip0U+ApRSUUcJVKKnW1sTp62p1tbErT0UlFbE7VKKSijidqFFTra8+9Fh6KSsotilFTopoGKUVOingYpRU6KeBilFTop5AxSip0VSQMUoqdFPIGHopKKeQMUrKSinkDFKKnRTyBilZSUVSQMPW0lFHCU9bU62tiVPW1Oto4laetqdbWxK09bU62tiVp6KStrYla5qNk6K849XilFTopoGKUVOinkDFKKnRVJC4pRU6KpIGKUVOinkDFKKnRVJAxSspKKeQMPW1OiqSBilZSUU8gYeikoqkhcPW4ynW02Ep62p1tHEuqetqdbWxG09bU62tiXVPW1OtrYj1T1tTraOJWnranW1sRtctFTorzMezxSip0bKSBilFToqkgYpRU6KpIGKUVOiqSBh6KSinkLh6KSiqSBh6KSiqSBh6KSiqSFw9FJWVSQMU2FJW0+Ep62p0UcR6qlbU62tiPVPW1OtrYj1T1tJRRxHqqUUlFbEOqpRSUVsR66UopKKOI3pyUVOivMSPe4pRU6KpIGHopKKrIXD0UlFUkDD0UlFUkLh6KnRVJAxSip0VWQMUopKyqSFxSip0VWchilFTraeQlUopKKOI9VStqdbWxDqnranW0cQ6qlFJRWxDqnraSitiPVUranW0cQ66PW0lFbEOuj1tJRWxHrpw0UlFeYkfo1h6NiVlVkDFKKSiqyFw9FTo2VkDFKKnRVJC4pRU6KrIGKUVOiqyFxSip0VWchilFToqkhKpW1Oto4j1T1tJRWxDqqVtTraOOfqnrcZJW1sQ6p62p1tHHP10etpKK2IddHraSto45+uj0UlbWxDro9bU62tiHXTz6Nk6K8zI/UcUoqdFVkDFKKnRVZC4pRU6NlZC4pWUlFVkDD0UlFW55LilZSUVWchh6KSiqyFqlbU62jiHVPW1PGW0cc/VUranW1sc/VPW1Oto45+ulK2p1tbHP10pRSVtbHP10eikraOOfro9bSUVsc3XSlFJW0cc/XZ63ZOtrY5+u3m0VOivNcx+vYeikoq3MLh6NiUVXmFw9FJRVueQw9FJWVXnkuKbCp0VbnkuKUVOiqzktUranW02I9VStxlOto45+6pRSVtbHN10etqdbjI45uulK2p1tbHN10pRSVtHHP10etpKK2ObvpSikraOObro9bVcdDzuz8/dw4/rfQ87t+XD5L9c+odfXiVFW9Fze3Hu4fIx0XN7ce7h8j9c+ufqd+JVtVx0XN7ce7h8tx0PO7Plw+W+uPXP1z3/ADfx4YAeb5fs9AAX5KAwK8lrQAtyWgALcloYAryVowArC9NaALm6bgYaGc3YaALm6a0AXN21oDObprQGcvbchoFz9AAC5e36rh+n6w3AD5TrrWAAnWgASP/Z" alt="back" />
            <h1 id="title"><span>myoozik app<span className='spacer'></span><br/><span className='spacer'></span> by yixue rick ino</span></h1>
            <br/>
            <Link to='/library'><button className='btn btn-outline-dark songLibrary'>Song Library</button></Link>
            <Link to='/playlist'><button className='btn btn-outline-dark playlists'>Playlists</button></Link>
        </div>
    );
}

export default Homepage;