        var name=document.getElementById("sname");
        var age=document.getElementById("age");
        
        var course=document.getElementById("course");
        var email=document.getElementById("smail");
        var save=document.getElementById("save");
        var table2=document.getElementById("table2");
        
        save.addEventListener("click",function(event) {
          event.preventDefault()
          var tr=document.createElement("tr")
          var button=document.createElement("button")
          var gn=document.querySelector('input[name="gender"]:checked');
          var sgn=gn?gn.value:"";
        
          
          tr.innerHTML=`<td>${sname.value}</td>
          <td>${age.value}</td>
          <td>${sgn}</td>
          <td>${course.value}</td>
          <td>${smail.value}</td>
          <button id="remove" type="button" onclick="remove(event)">${"Remove"}</button>`
          table2.append(tr)
          document.querySelector('form').reset()

          


        })
         function remove(){
          event.target.parentElement.remove()

         }
         
          var t2=document.getElementById("t2")
          var view=document.getElementById("view")
          view.addEventListener("click",function(){
            t2.style.display="block"

          })

         





       
