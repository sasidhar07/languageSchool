import NavBar from "../NavBar/index";
function Lecture() {
    return (
       <>
       <NavBar/>

<div style={{ backgroundColor: '#A7D397', height: '90vh' }}>
<div className="container mt-0">
  <h1 className="mt-4">French for beginners</h1>

  {/* Module Dropdown */}
  <div className="dropdown ">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="moduleDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Module
    </button>
    <div className="dropdown-menu" aria-labelledby="moduleDropdown">
      <a className="dropdown-item" id="1" href="#" data-module="1">Module 1</a>
      <a className="dropdown-item" id="2" href="#" data-module="2">Module 2</a>
      <a className="dropdown-item" id="3" href="#" data-module="3">Module 3</a>
    </div>
  </div>

  {/* Video Container */}
  <div className="embed-responsive embed-responsive-16by9 mt-4">
    <iframe className="embed-responsive-item" id="videoPlayer" src="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>

  {/* Lesson List */}
  <ul className="list-group mt-4" id="lessonList">
    {/* Lessons will be loaded here based on the selected module */}
  </ul>
</div>
</div>
       </>
    );
  }
  
  export default Lecture;
  