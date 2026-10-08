var c=0,cn=document.getElementById("cnt");
function show(){cn.textContent=c}
document.getElementById("inc").onclick=function(){c++;show()};
document.getElementById("dec").onclick=function(){c--;show()};
document.getElementById("rst").onclick=function(){c=0;show()};
document.getElementById("ci").oninput=function(e){document.getElementById("co").textContent=e.target.value||"stranger"};
var P=[
["Initialization","The component sets up its initial props and state. In a class this happens in the <code>constructor()</code>; in a function it is the first run of <code>useState</code>."],
["Mounting","The component is created and added to the DOM. Methods: <code>constructor</code>, <code>render</code>, <code>componentDidMount</code>. Fetch data here."],
["Updating","Runs when props or state change. Methods: <code>shouldComponentUpdate</code>, <code>render</code>, <code>componentDidUpdate</code>."],
["Unmounting","The component is removed from the DOM. <code>componentWillUnmount</code> is where you clean up timers and subscriptions."],
["Error handling","Error boundaries catch errors in child components using <code>componentDidCatch</code> and <code>getDerivedStateFromError</code>, then show a fallback UI."]];
var tb=document.getElementById("tabs"),ph=document.getElementById("phase");
function setP(k){ph.innerHTML="<strong>"+P[k][0]+"</strong><p>"+P[k][1]+"</p>";
Array.prototype.forEach.call(tb.children,function(b,i){b.setAttribute("aria-pressed",i==k)})}
tb.onclick=function(e){var k=e.target.getAttribute("data-k");if(k!==null)setP(+k)};
setP(0);
