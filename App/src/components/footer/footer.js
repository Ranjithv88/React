import React from 'react';
import './footer.css';

function Foot() {
    return (
        <div className="BottomOfWeb">
            {/*======== Icon Bootstrap Link ========*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"></link>
            {/*======== Footer On WebSites ========*/}
            <footer>
                <div class="upperFooter" >
                <div>
                    <h1> Contact Us <i class="bi bi-arrow-right UFIcon "></i></h1>
                </div>
                <div>
                    <button value="button" ><i class="bi bi-arrow-right UFIcon "></i></button>
                </div>
                </div>
                <div class="lowerFooter" >
                <div>
                    <h1> The agency for impatient brands@ </h1>
                </div>
                <div>
                    <h5> Follow Us </h5>
                    <h5>
                    <a href="#"><i class="bi bi-envelope LFIcon "></i></a>
                    <a href="#"><i class="bi bi-globe-asia-australia LFIcon "></i></a>
                    <a href="#"><i class="bi bi-instagram LFIcon "></i></a>
                    <a href="#"><i class="bi bi-linkedin LFIcon "></i></a>
                    </h5>
                </div>
                </div>
                <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @CopyRight - Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores, consequatur saepe non quibusdam vel molestias qui eaque quis, et temporibus perferendis veritatis dolorem labore? Iste eos exercitationem quos repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores, consequatur saepe non quibusdam vel molestias qui eaque quis, et temporibus perferendis veritatis dolorem labore? Iste eos exercitationem quos repudiandae.</p>
            </footer>
        </div>
    );
}

export default Foot;

