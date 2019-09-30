const courses = data.map((course, i) => {
  return (
    <Card data={course} key={i} /> 
  );
});


ReactDOM.render(
  <div className="container">
    <div className="row">
      {courses}
    </div>
  </div>,
  document.querySelector('#root')
)