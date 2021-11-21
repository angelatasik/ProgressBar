Users ги влечам од .json фајл и секој посебно ги внесувам во progress-bar-овите, не вртам со for циклус.
<p><ngb-progressbar type="success" [value]=+item>{{UsersList[0].name}} - {{item}}%</ngb-progressbar></p>
{{UsersList[1].name}}, {{UsersList[2].name}} .. 

AddValue --> вредноста што се внесува, секаде  се става истата. 

