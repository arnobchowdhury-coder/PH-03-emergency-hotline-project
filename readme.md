1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : The method of getElementById is all the child elements which have all the given class name ..
and The method of getElementByClassName is of the Document Object returns a Nodelist Collection of elements with a given `name` attribute in the document ..

The querySelector returns all the element descendants of node that match selectors..
and The querySelectorAll returns all the elements descendants of node that all selectors....

2. How do you create and insert a new element into the DOM?
Ans : Create and insert a new element into the DOM ---we must have create the element first and then append it to an existing element.
example:
<div id = 'div-1'>
   <p id='p1'>I am DOM </p>
</div>
<script>
  const element = document.getElementById('p')
  element.appendChild('div-1');

3. What is Event Bubbling and how does it work?
Ans : Event Bubbling is a step to the DOM where an event,triggered on special element , propagates upward through the DOM Tree ..
It's worked by Capturing Phase , Target Phase , Bubbling Phase and so more.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation in JavaScript is a technique where a single eventListeners is attached ta a parent element to manage events triggered by its child elements, rather than attaching separate event listeners to each individual child.
It is useful for improved performance and memory efficiency , simplified code and easier maintenance , handling dynamic content etc...

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : The difference between preventDefault() and stopPropagation() methods  is event handling serve distinct purposes related to event behavior..
The preventDefault() prevents the default action with a special event from occuring . and the stopPropagation prevents the event from propagating the DOM tree...



 
