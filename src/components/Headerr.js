import React from "react";

function Headerr(){
    return(
    <div className="Headerr">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img className="shik" src={require("../images/ngo.png")} alt="" />
                <h1 className="shi">Shiksha</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#About-container">About us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#Proj">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#Event">Events</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#Blog">Blog</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Headerr;