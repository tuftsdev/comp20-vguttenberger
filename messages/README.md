1. Everything correctly implemented
2. n/a
3. 1 hour

Q: Is it possible to request the data from a different origin (e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) from using XMLHttpRequest? Why or why not?

A: No, you cannot request data from a different origin or local machine from
 using XMLHttpRequest because of the same-origin policy. The same-origin 
 policy doesn't allow scripts from one page to access scripts from another
 if the webpages do not have the same origin. This prevents malicious
 scripts from accessing data on another page.
