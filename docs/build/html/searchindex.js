Search.setIndex({docnames:["classes/Channels","classes/EventFilters","classes/EventReference","classes/Indicators","classes/Observers","classes/Policies","classes/Readme","classes/Reporters","classes/Summarizers","classes/Tasks","classes/Trackers","classes/related/PostgRESTSchema","config/Classes","config/Example","config/Global","config/Macros","config/Readme","config/Separating","general/Architecture","general/Installation","general/Recipes","general/Tutorial","general/Usage","index"],envversion:53,filenames:["classes/Channels.rst","classes/EventFilters.rst","classes/EventReference.rst","classes/Indicators.rst","classes/Observers.rst","classes/Policies.rst","classes/Readme.rst","classes/Reporters.rst","classes/Summarizers.rst","classes/Tasks.rst","classes/Trackers.rst","classes/related/PostgRESTSchema.md","config/Classes.rst","config/Example.rst","config/Global.rst","config/Macros.rst","config/Readme.rst","config/Separating.rst","general/Architecture.rst","general/Installation.rst","general/Recipes.rst","general/Tutorial.rst","general/Usage.rst","index.rst"],objects:{"performance.driver.classes.channel":{CmdlineChannel:[0,0,1,""],HTTPChannel:[0,0,1,""],MarathonDeployChannel:[0,0,1,""],MarathonUpdateChannel:[0,0,1,""]},"performance.driver.classes.channel.cmdline":{CmdlineExitEvent:[2,0,1,""],CmdlineExitNonzeroEvent:[2,0,1,""],CmdlineExitZeroEvent:[2,0,1,""]},"performance.driver.classes.channel.cmdline.CmdlineExitEvent":{exitcode:[2,1,1,""]},"performance.driver.classes.channel.http":{HTTPErrorEvent:[2,0,1,""],HTTPFirstRequestEndEvent:[2,0,1,""],HTTPFirstRequestStartEvent:[2,0,1,""],HTTPFirstResponseEndEvent:[2,0,1,""],HTTPFirstResponseErrorEvent:[2,0,1,""],HTTPFirstResponseStartEvent:[2,0,1,""],HTTPLastRequestEndEvent:[2,0,1,""],HTTPLastRequestStartEvent:[2,0,1,""],HTTPLastResponseEndEvent:[2,0,1,""],HTTPLastResponseErrorEvent:[2,0,1,""],HTTPLastResponseStartEvent:[2,0,1,""],HTTPRequestEndEvent:[2,0,1,""],HTTPRequestStartEvent:[2,0,1,""],HTTPResponseEndEvent:[2,0,1,""],HTTPResponseErrorEvent:[2,0,1,""],HTTPResponseStartEvent:[2,0,1,""]},"performance.driver.classes.channel.http.HTTPErrorEvent":{exception:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPFirstResponseErrorEvent":{exception:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPLastResponseErrorEvent":{exception:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPRequestEndEvent":{body:[2,1,1,""],headers:[2,1,1,""],url:[2,1,1,""],verb:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPRequestStartEvent":{body:[2,1,1,""],headers:[2,1,1,""],url:[2,1,1,""],verb:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPResponseEndEvent":{body:[2,1,1,""],headers:[2,1,1,""],url:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPResponseErrorEvent":{exception:[2,1,1,""]},"performance.driver.classes.channel.http.HTTPResponseStartEvent":{url:[2,1,1,""]},"performance.driver.classes.indicator":{NormalizedMeanMetricIndicator:[3,0,1,""]},"performance.driver.classes.observer":{HTTPTimingObserver:[4,0,1,""],LogLineObserver:[4,0,1,""],MarathonEventsObserver:[4,0,1,""],MarathonMetricsObserver:[4,0,1,""],MarathonPollerObserver:[4,0,1,""]},"performance.driver.classes.observer.events.marathon":{MarathonDeploymentFailedEvent:[2,0,1,""],MarathonDeploymentStatusEvent:[2,0,1,""],MarathonDeploymentStepFailureEvent:[2,0,1,""],MarathonDeploymentStepSuccessEvent:[2,0,1,""],MarathonDeploymentSuccessEvent:[2,0,1,""],MarathonSSEEvent:[2,0,1,""],MarathonStartedEvent:[2,0,1,""],MarathonUpgradeEvent:[2,0,1,""]},"performance.driver.classes.observer.httpstatus":{HTTPStatusEvent:[2,0,1,""]},"performance.driver.classes.observer.httptiming":{HTTPTimingResultEvent:[2,0,1,""]},"performance.driver.classes.observer.httptiming.HTTPTimingResultEvent":{contentLength:[2,1,1,""],requestTime:[2,1,1,""],responseTime:[2,1,1,""],statusCode:[2,1,1,""],totalTime:[2,1,1,""],url:[2,1,1,""],verb:[2,1,1,""]},"performance.driver.classes.observer.logline":{LogLineTokenMatchEvent:[2,0,1,""]},"performance.driver.classes.policy":{BurstPolicy:[5,0,1,""],MultivariableExplorerPolicy:[5,0,1,""],TimeEvolutionPolicy:[5,0,1,""]},"performance.driver.classes.reporter":{CSVReporter:[7,0,1,""],DataDogReporter:[7,0,1,""],PlotReporter:[7,0,1,""],PostgRESTReporter:[7,0,1,""],RawReporter:[7,0,1,""],S3Reporter:[7,0,1,""]},"performance.driver.classes.tasks.auth":{AuthEE:[9,0,1,""],AuthOpen:[9,0,1,""]},"performance.driver.classes.tasks.http":{Request:[9,0,1,""]},"performance.driver.classes.tasks.marathon":{RemoveAllApps:[9,0,1,""],RemoveGroup:[9,0,1,""],RemoveMatchingApps:[9,0,1,""]},"performance.driver.classes.tracker":{CountTracker:[10,0,1,""],DumpMetricTracker:[10,0,1,""],DurationTracker:[10,0,1,""],EventAttributeTracker:[10,0,1,""],LogLineTokenTracker:[10,0,1,""]},"performance.driver.core.classes.summarizer":{BuiltInSummarizer:[8,0,1,""]},"performance.driver.core.eventbus":{ExitEvent:[2,0,1,""]},"performance.driver.core.eventfilters":{EventFilter:[1,0,1,""]},"performance.driver.core.events":{FlagUpdateEvent:[2,0,1,""],InterruptEvent:[2,0,1,""],LogLineEvent:[2,0,1,""],MetricUpdateEvent:[2,0,1,""],ObserverEvent:[2,0,1,""],ObserverValueEvent:[2,0,1,""],ParameterUpdateEvent:[2,0,1,""],RestartEvent:[2,0,1,""],RunTaskCompletedEvent:[2,0,1,""],RunTaskEvent:[2,0,1,""],StalledEvent:[2,0,1,""],StartEvent:[2,0,1,""],TeardownEvent:[2,0,1,""],TickEvent:[2,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:attribute"},terms:{"1234567890abcdef":7,"42s":11,"4a003e85":11,"4a003e85e8bb4a95a340eec1727cfd0d":13,"4a95":11,"89066441c416":11,"abstract":[16,23],"case":[1,2,4,5,14,15,18,21],"class":[0,1,2,3,4,5,7,8,9,10,13,14,15,16,17,18,20,21,22,23],"default":[0,4,5,7,9,10,14,16,22],"final":[5,9,22],"float":10,"function":[8,14,16,18],"import":[14,17,18,20,21],"int":10,"long":[0,5,14],"new":[0,2,11,21],"null":11,"public":7,"return":10,"short":[5,14],"try":[7,21],"while":[2,21],AND:11,Bus:12,But:21,Doing:20,For:[0,1,4,5,9,11,14,15,18,20,21],IDs:[10,18],NOT:11,Not:1,One:[0,7,10,11,13,21],Such:[4,5,12,15,18,21,22],That:14,The:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23],Then:21,These:[9,11,18],Use:[9,20],Using:[14,16,23],WITH:11,Will:[4,17],_attributes_:1,_event:1,_run:15,_selector_:1,a340:11,abl:21,about:[2,9,13],abov:[7,14,21],abruptli:13,accept:[0,2,4,9,14,22],accet:15,accompani:14,accord:[0,4,18,21],achiev:21,acl:7,across:7,action:[0,9,11,21,22],activ:[4,20,22],actual:[11,12,18],adapt:18,add:21,added:22,addit:[0,4,9,22],address:20,aedd:11,affect:4,affectedinst:2,after:[0,5,9,12,13],again:[0,21],against:[4,9,13,18],agent:7,alert:[7,18],aliv:20,all:[0,2,3,5,7,8,9,13,14,17,18,21,22],allow:[4,9,18],along:[7,14,18],also:[0,4,5,13,14,18,21,22],alter:11,alwai:[0,4,10,15,21],amazon:7,analys:12,ani:[1,5,15,16,20,23],anoth:[17,18],another_valu:14,anyth:5,anywher:0,api:7,api_kei:7,app:[0,4,5,7,9,12,13,21,23],app_kei:7,appear:[4,15],appli:[0,4,5,9,12,18,21],applic:[0,2,4,10,11,12,13,15,18,20,21],appropri:21,arbitrari:[0,5,9,12,14,18],architectur:23,archiv:[7,18],arg:[0,2,4,7,9,10,20],argument:[0,14,15,18,21,22],around:1,arrai:[4,5,14,16,18,21],artifact:15,assign:[4,14,18],assum:[11,14,21],aswel:0,atstart:[0,13,20],attrib1:1,attrib2:1,attrib:[1,10],attribut:[1,2,10],auth:6,authe:6,authent:[0,4,7,9],authopen:6,author:[0,4,9],autocascad:10,automat:[0,4,9],avail:[2,4,6,8,9,15,18,19,20],averag:[3,13],awar:15,aws_access_key_id:7,aws_secret_access_kei:7,axes:[7,21],axi:[7,11,14,18,21],backofffactor:[0,4,9,13,21],backoffsecond:[0,4,9,13,21],bar:[4,17],barobserv:17,base:[0,2,4,7,9,11,12,14,21],batch:[0,18],bax:4,baz:[4,17],becaus:23,becom:21,befor:[0,2,5,9,12,13,14,21],begin:[2,11],behav:[7,17],behaviour:[12,17],being:[0,4,7,10,11,12,14,18,21,22],belog:18,below:11,benchmark_us:15,between:[0,4,5,9,10,11,13,14,21],binari:19,bind:[5,13],black:23,blob:7,block:[9,10],bodi:[0,1,2,4,9,13,21],bool:10,bootstrapus:9,box:23,bring:9,broadcast:[2,4,10],bucket:[7,15],built:[8,14],builtinsummar:[6,14],burst:5,burstpolici:6,bus:[2,4,10,12,13,18,21],bwr:7,calcul:[3,4,8,13,14,18,21],call:[8,9,12,15,18,21],can:[0,1,3,4,5,7,8,9,10,11,12,14,15,16,18,19,20,21,22],cannot:7,captur:4,carri:18,cascad:[10,23],categori:12,caus:4,certainli:10,cfac77fc:11,cfac77fceb244862aedd89066441c416:13,chang:[0,2,4,5,9,11,12,13,14,15,18,21],changng:12,channel:[2,4,5,6,9,13,15,16,18,20,23],charact:[7,11],check:[9,12,21],checkpoint:11,chose:1,classess:12,clean:[9,12],clock:2,close:1,cluster:[9,12],cluster_url:9,cmd:[0,4,9,13,21],cmdline:[0,2,13,15,20],cmdlinechannel:[6,13,15,18,20],cmdlineexitev:2,cmdlineexitnonzeroev:[0,2],cmdlineexitzeroev:[0,2],code:[0,2,21],collect:[4,7,10,11,12,14,18,21,22],color:7,colormap:7,colormaps_refer:7,column:7,com:19,combin:[5,10,11,18,21],come:[14,15,17],comma:[1,7],command:[0,2,13,14,15,18,19,20,21,22],commun:18,compact:14,compar:20,complet:[0,2,5,7,9,10,11,13,18,21],complex:21,compon:[0,9,12,14,18,23],compos:[7,15,16,18],comput:[3,5,15,20,21],concaten:17,concept:21,conceptu:21,condit:[5,14],config:[0,3,5,7,8,9,13,15,16,18,21,22],configur:[0,2,4,5,6,7,8,9,10,15,18,20,21,22,23],congur:16,conjunct:10,connect:[2,4],consid:[5,14,21],consol:21,constraint:11,contain:[1,5,6,7,8,9,10,11,14,20,21],content:[0,6,16,23],contentlength:2,continu:[5,13,14,18,19,21],control:[5,7],convert:[4,10],copi:20,core:[1,2,8],correct:[1,10],could:[5,11,12],count:[2,10,13,21],counttrack:6,coupl:7,cpu:[0,4,9,13,21],creat:[5,7,11,12,13,18,21],critic:2,cruicial:4,css:1,csv:[7,13],csvreport:[6,13],ctl:15,current:[1,15],cwd:[0,13],data:[7,11,12,18,23],databas:[7,11],datadog:7,datadogreport:6,dco:[7,9,12,15,16,17,18,19,21,22],dcos_auth_token:[0,4,9],deduc:21,def:22,defin:[0,4,5,7,12,13,15,16,17,18,21,23],definit:[0,4,5,9,15,21,22],delet:[9,11],deletem:9,delta:2,demonstr:13,depend:[0,5,9],deploi:[0,21],deploy:[0,2,4,9,13,14,18,21],deploymenttim:[13,14,21],deploytim:11,desc:[11,13,14,21],describ:[5,13,14,18,22],descript:[1,6,9,14,21],design:[18,23],detail:[4,6,12,14,15,16],detect:[4,18],deviat:[8,18],devis:21,dictionari:[1,5,16],differ:[0,1,7,18],differntli:17,diment:11,directori:[0,22],discreet:[5,21],discret:[13,21],disk:[0,4,9,13,21],dispatch:2,displai:7,displatch:2,document:[4,11],doe:10,don:[0,4,9],down:[2,12,16,21],drive:[5,12,14,18],driven:13,driver:[0,1,2,3,4,5,6,7,8,9,10,12,15,16,17,18,19,21,22],dummi:13,dump:[7,10,13,20],dumpmetrictrack:6,durat:[10,13,20,21],durationtrack:[6,13,21],dure:[2,11,15,21],duringt:21,dynam:[0,4,9],e8bb:11,each:[4,7,9,11,12,14,18,21],eachoth:18,easili:18,eb24:11,edit:9,eec1727cfd0d:11,effect:[11,14,18],either:[4,5,12],elabor:1,emit:[0,4,18,21],emmit:[11,12,13],emmmit:18,empti:21,enabl:22,encount:20,end:[2,5,10,13,21],endeventcount:5,endeventfilt:10,endpoint:[4,7,13],engin:15,enough:21,enterpris:9,entir:[0,14],enumer:9,env:[0,13],environ:[0,2,7,11,12],equal:1,equival:4,error:[0,2,8,14],establish:4,etc:[11,14],eval:5,evalu:[5,13,15],even:[14,21],event:[0,4,5,6,10,12,13,21,23],eventattrib:10,eventattributetrack:6,eventbu:[0,2,5,7,9,18],eventdata:2,eventfilt:1,eventnam:[1,2],eventtowaitforcomplet:5,eventtowaitforcontinuingburst:5,eventtowaituntilreadi:5,eventu:11,ever:13,everi:[0,1,2,4,5,6,7,9,11,12,13,14,16,17,18,21,22],everyth:[18,21],evolut:[5,12,18,23],evolv:[4,5],exact:1,exactli:[7,15],exampl:[0,1,4,5,7,9,11,14,15,16,18,20,21,23],except:[2,7,22],execut:[2,5,9,11,12,18],exist:[0,4,9],exit:[0,2,22],exitcod:2,exitev:2,expand:22,expect:[2,5,11,21],explain:11,explor:[5,13,21],express:[0,1,4,5,10,15],extend:14,extens:[7,18],extrac:12,extract:[0,4,10,11,12,13,14,21],factor:5,fail:[4,5,14,21],failur:[11,13,21],fallback:4,fals:[7,11],familiar:[19,21],fetch:11,field:11,file:[7,12,14,15,16,21,22,23],filenam:[7,13],filesystem:[7,12],filter:[0,6,10,23],find:8,finish:[5,9,11,21],first:[0,1,2,4,5,7,9,14,17,21],fit:[16,21],flag:[2,7,22],flagupdateev:2,flatten:4,flexibl:21,folder:[7,22],follow:[0,1,4,5,7,8,9,11,12,13,14,15,17,18,20,21],foo:[1,4,17],fooobserv:17,foreign:11,forget:13,format:[7,12,14],forward:[4,10],fragment:13,free:14,frequent:[10,20],friendli:20,from:[0,2,3,4,5,7,9,10,11,12,13,14,15,17,18,21],fsm:2,full:[4,7,13,14,22],fulli:4,further:[0,14,18,21],gaug:10,gener:[7,14,20,21],generalconfig:7,get:[0,2,4,9,19,21],git:19,git_hash:11,github:19,give:0,given:[0,3,4,5,8,9,10,11,13,15,17,20,21],global:[13,16,21,23],going:[4,5,14,20,21],good:21,grater:1,group:[0,4,9,11,13,16],guid:[14,15,21],handl:10,har:[14,16,23],hard:21,has:[0,2,9,10,11,12],have:[0,4,7,9,11,21,22],header:[0,2,4,7,9],heap:10,help:[17,21,22],here:7,high:[4,11,14],higher:22,host:7,hostnam:7,how:[0,5,12,14,21,22],howev:[5,19],html:7,http:[0,2,4,6,7,13,15,19,20,21],httpchannel:[6,13,21],httperrorev:2,httpfirstrequestendev:[0,2],httpfirstrequeststartev:[0,2],httpfirstresponseendev:[0,2],httpfirstresponseerrorev:2,httpfirstresponsestartev:[0,2],httplastrequestendev:[0,2],httplastrequeststartev:[0,2],httplastresponseendev:[0,2],httplastresponseerrorev:2,httplastresponsestartev:[0,2],httprequestendev:2,httprequestev:1,httprequeststartev:[0,1,2],httpresponseend:10,httpresponseendev:[0,1,2,13,21],httpresponseerrorev:2,httpresponsestartev:2,httpstatu:2,httpstatusev:2,httptime:2,httptimingobserv:[2,6],httptimingresultev:[2,4],human:[7,16],ideal:16,identifi:[11,14,18],ignor:5,imag:[7,13],immedi:5,implement:[0,9,12,15,17,18],inbetween:[4,9],includ:[0,2,7,8,9,21,23],increas:[14,17,18,23],increment:5,index:23,indic:[5,6,7,11,13,21],indicat:21,individu:[0,18],induc:18,info:21,inform:[7,11,12,14,19,21],initi:[0,2,5,9,10,18],inject:[0,4,9],inout:0,input:[0,11,14,21],instal:23,instanc:[0,2,4,5,7,9,11,13,14,15,18,21],instead:[5,7,9,10,22],instruct:[0,2,17,18,21],integ:[10,11],intent:9,interconnect:12,interest:[11,18,20,21],interfac:19,intern:[2,11,21],interrupt:2,interruptev:2,intertest:[9,12,13],interupt:2,interv:[4,5],introduc:[4,13],invalid:15,invok:14,itself:10,jid:11,job_phas:11,join:11,json:[4,7,13,15,20],jvm:10,keep:[0,2,11,20],kei:[1,5,7,11,15,17],keystrok:2,kill:0,kind:[2,14],know:10,known:6,kwarg:[0,2,4,7,9,10],last:[0,1,2,10,14,17,21],latenc:[4,10],later:[4,14,21],latest:11,lattenc:4,launc:13,launch:[0,2,13,15,18,21,23],legend:14,length:2,lengthi:2,less:1,let:21,level:[4,11,14],like:[1,4,7,8,11,14,21],limit:[0,11],line:[0,2,4,7,10,13,14,15,18,19,20,21,22],linear:7,link:20,list:1,listen:[4,18],load:[2,12,17],local:[2,7,12,13],locat:[17,22],log10:7,log2:[7,13],log:[2,4,7,10,12,18,21],logic:21,loglin:[2,10],loglineev:[0,2,4],loglineobserv:[6,10],loglinetokenmatchev:[2,4],loglinetokentrack:6,longer:2,look:21,lookup:7,loop:2,low:4,lower:2,machin:7,macro:[0,13,14,16,20,21,22,23],made:0,main:[2,14],mainli:14,major:16,make:[9,18,20],manag:2,mani:[0,1,2,5,14],manner:7,map:10,marathin:13,marathon:[0,2,4,6,10,13,15,18,21],marathon_repo_dir:[0,13],marathon_url:[0,4,9,13,21],marathonapiev:[],marathonapipostev:[],marathondeploychannel:6,marathondeploymentev:[],marathondeploymentfailedev:[2,4,5,13,21],marathondeploymentinfoev:4,marathondeploymentstatusev:2,marathondeploymentstepfailureev:[2,4],marathondeploymentstepsuccessev:[2,4],marathondeploymentsuccessev:[2,4,5,13,21],marathonev:2,marathoneventsobserv:[6,13,21],marathonframeworkmessageev:[],marathonmemheapusag:10,marathonmemtotalusag:10,marathonmetricsobserv:[6,10,13],marathonpollerobserv:6,marathonsseev:2,marathonstartedev:[2,4,13,21],marathonstatusupdateev:[],marathonsubscribeev:[],marathonthreadsblock:10,marathonthreadscount:10,marathonthreadswait:10,marathonunsubscribeev:[],marathonupdatechannel:6,marathonupgradeev:2,master:[11,13],match:[0,1,4,9,11,23],matplotlib:7,matrix:[5,13,21],max:[5,8,13,14,21],maximum:8,mean:[7,8,12,13,14,17,18,21],mean_err:8,meandeploymenttim:[13,14],meandeploymenttimeperapp:18,meanmemoryusag:7,measur:[4,7,10,12,13,14,18,21],median:8,mem:[0,4,9,13,21],memori:[7,10,18,21],merg:[11,16],meso:13,mesospher:19,messag:[12,18,21,22],meta:[7,13,15,23],metadata:[7,13,14,16,22],method:1,metric:[0,2,3,4,7,8,10,12,13,15,17,23],metric_data:11,metricnam:[7,10],metricupdateev:[2,4],micro:9,might:[4,11,15,20],migth:20,min:[5,8,13,14,21],minim:15,minimum:8,miss:[0,7,14,22],mmetric:11,mode:8,model:1,modif:0,modifi:0,modul:[19,23],modular:[18,23],moment:[11,18,21],monitor:[0,4,10,12,18],monoton:5,more:[0,1,2,4,5,7,10,11,12,14,15,18,19,21,22],most:[0,10,21],much:[5,21],multi:[5,13],multipl:17,multivariableexplorerpolici:[6,13,21],must:[7,10],mycustomsummar:14,name1:22,name2:22,name:[0,1,2,4,5,7,8,9,10,11,13,14,15,21],name_:1,need:[0,1,10,15,18,19,21,23],network:[7,12],never:0,newparamet:2,next:[0,5,10,21],nice:21,noisi:21,non:2,none:2,normal:[3,13,14,18],normalizedmaxmetricind:6,normalizedmeanmetricind:[6,13,14],normalizedminmetricind:6,note:[0,4,9,14,17,21],now:[19,21],nth:1,number:[0,5,7,12,13,14,18,21],numer:[5,11],observ:[0,2,6,10,13,16,17,18,23],observerev:2,observervalueev:2,obtain:9,occur:[2,12],occurr:10,oder:0,oid:11,oldparamet:2,ommit:7,onc:21,one:[0,2,4,5,7,9,11,12,14,18,21,22],ones:[9,14],onli:[0,5,7,11,14,15,21,22],onlin:12,open:9,oper:[1,2,10,12,14,22],oportun:21,opt:13,option:[0,4,5,7,8,9,10,22],orchestr:18,order:[0,1,2,4,9,10,11,13,14,15,16,18,21],org:7,origin:[0,9,10],other:[0,9,11,12,13,14,17,18],otherwis:[4,7,10],our:21,out:[1,2,13],outcom:[3,13,14,18],outlier:8,output:[0,11,21],over:[5,11,12,15,21],overal:[2,16,18],overriden:14,own:[0,12,14,18,21],owner:[7,11],packag:12,page:23,parallel:[],param1:12,param:5,paramet:[0,2,3,4,5,7,9,12,13,15,16,17,18,20,22,23],parameter1:14,parameter2:14,parameter_nam:15,parameterbatch:5,parameternam:[5,14],parameterudateev:10,parameterupdateev:[2,10,18],parametr:15,part:[5,14,22,23],parti:18,partial:1,particip:[9,12],pass:[0,12,16],password:[9,14],past:20,patch:0,patch_app:0,path:[0,4,7,15,20,22],payload:0,pend:0,per:[4,13,14,16,23],perf:[7,12,15,16,17,18,19,21,22],perf_test_job:11,perf_test_job_meta:11,perf_test_job_phas:11,perf_test_lookup_metr:11,perf_test_lookup_paramet:11,perf_test_phase_flag:11,perf_test_phase_metr:11,perf_test_phase_param:11,perform:[0,1,2,3,4,5,6,7,8,9,10,12,13,18,21,22],period:5,permut:[5,13],phase:[7,9,15],phase_:11,pick:[0,18],pid:11,pip:19,place:[2,15,18],plain:[0,4,9],plasma:7,plot:[7,8,11,13,14,18,21,23],plotreport:[6,13,20,21],plug:[12,16],png:[7,13,21],pod:0,point:[7,12,19,20],polici:[2,4,6,9,13,14,16,18,21,23],poll:4,poller:4,popul:11,populc:4,portion:9,posit:22,possbl:0,possibl:[5,7,10,14,15,21],post:[0,1,4,9,13,18,21],postgr:7,postgresql:11,postgrest:[7,11,14],postgrestreport:[6,11,15],posttest:[9,12],practic:21,pre:14,prefix:[7,13,15,21],prepar:12,pretest:[9,12],previou:[0,5,18,21],previousev:2,primari:11,principl:18,prioriti:22,privat:7,probe:4,problem:[20,21],process:[0,2,4,7,11,12,16,21,23],produc:[10,18,21],product:5,profile_data_:7,progress:0,project:[7,11,13,19],properli:4,properti:[0,14],provid:[5,7,14,15,16,21],proxi:8,publicli:19,publish:[0,2,4,21],pure:1,purpos:[4,14],pypi:19,python:[0,5,9,10,15,19],qualiti:14,queri:7,question:18,quit:[16,21],rais:[2,10,11,18],rang:5,rather:[13,21],ratiocolormap:7,raw:[2,7,13,20],rawreport:[6,13,20],read:7,readabl:[7,16],readi:[2,5,9,12,21],reason:[18,21],receiv:[5,12,21],recip:23,recommend:9,record:18,ref:[7,22],refer:[4,7,10,11,12,14,15,23],refernc:[7,20],regard:19,regex:[0,4],regexp:4,regular:[1,4],rel:17,relat:[7,18],relaunch:20,relev:10,remov:[9,13],removeallapp:6,removegroup:[6,13],removematchingapp:6,renam:11,repeat:[0,2,11,13,14,18,21],repeataft:0,repeatinterv:0,replac:[4,17],repor:21,report:[6,9,11,13,14,15,16,18,20,22,23],reporter_url:15,repositori:19,repres:14,represent:[7,18],reqeust:4,request:[0,2,4,6,7,13,21],requesttim:2,requir:[2,4,7,13,14,21],resort:14,resourc:2,respons:[0,2,4,18,21],responsetim:2,restart:[0,2],restartev:2,result:[2,3,4,7,9,10,11,12,13,14,15,17,18,20,23],ries:4,right:[9,12,13],root:[9,18],rule:[0,4,5,13],run:[0,2,3,5,7,9,11,12,13,20,22,23],runtaskcompletedev:2,runtaskev:2,s3report:[6,15],sai:21,same:[0,7,11,17],sampl:[4,5,7,11,13,14,18,21],save:7,sbt:13,scala:13,scalar:[0,3,13,14,18,21],scale:[0,4,5,7,9,10,11,12,13,16,18,21,22,23],scatter:7,scenario:16,schema:7,script:22,sdeviat:8,search:23,sec:[13,14,21],second:[0,2,4,5,14,17,21],secret:14,section:[6,14,17,20,21,22],see:21,select:[0,7,11,12],selector1:1,selector2:1,selector:1,send:[0,4,7,9],sensit:1,sent:[0,18],separ:[1,7,12,16,23],seri:[5,7,8,9,13,18],serial:11,server:4,servic:[7,12,14,16],session:[1,2,4,9,10],set:[0,4,7,8,9,10,11,15,18,21],setup:[9,12],share:[12,14],shot:9,should:[9,11,13,14,16,19,20,21],show:22,shuffl:0,side:4,signal:[5,13,21],signaleventcount:[5,13],similar:1,simpl:[11,23],simpli:10,simul:13,sinc:[4,5,7,11,14,18,19],singl:[3,9,11,13,14,18],size:[5,17],sleep:[0,4,9,13,21],small:15,sole:18,solut:21,some:[0,1,9,11,12,13,14,15,17,20,21,22],someclass:12,someev:10,somemetr:10,someth:21,soon:0,sourc:[0,1,2,3,4,5,7,8,9,10,16],space:13,spec:0,special:5,specif:[9,21],specifi:[0,1,4,5,7,9,13,14,21,22],speciti:0,sql:7,sse:[2,4],stack:22,stale:14,stall:[2,4],stalledev:2,standard:[0,8,19,21],start:[0,2,5,7,9,10,11,12,13,14,20,21],startev:2,starteventfilt:10,stat:[4,23],state:[2,9,12,14,18],stateless:18,statement:[5,15,16,17,21,23],statist:[8,11,14,18],statu:[4,5,7,11,13],statuscod:2,stdin:0,steer:[12,16],step:[5,21],still:[0,14],stop:10,store:[7,10,21],str:10,stream:21,strftime:15,string:[1,2,9],structur:[7,11,14],stuck:2,submit:[7,11],subscrib:[4,13,21],success:[13,19],successfuli:21,successfulli:[4,5],suffix:7,suit:14,sum:[7,8],summar:[6,7,13,14,21,23],summari:[7,8],summaris:[1,7,9,14,18,21],summarisationfunct:14,support:[1,12],synchronis:[0,4,12,18],syntax:[1,15],system:[2,9,12,21],sytem:[9,12],tabl:[1,7,9],take:[0,5,14,18,21],taken:[0,4],task:[0,2,4,6,13,16,18,21,23],tear:12,teardown:[2,9,12,13],teardownev:2,templat:15,term:21,termin:[2,5,10,13],terminolog:7,test:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,19,22],text:[0,4,9],tha:18,than:[1,2,5,7,11,22],thei:[0,10,11,12,13,15,17,18,21],them:[0,4,9,10,11,21],therefir:7,therefor:[0,1,11,18,21],thi:[0,2,3,4,5,6,7,9,10,11,12,13,14,16,17,18,20,21,22],though:21,thread:10,through:[0,2,4,5,9,11,12,13,14,15,16,18,21,22],thrown:7,thu:[0,18],tickev:2,till:[2,13,21],time:[0,1,2,4,5,7,8,11,12,13,14,15,17,18,20,21],timeevolutionpolici:6,timeout:[5,14],timeseri:[7,8,14],timestamp:[7,11],titl:[11,13,22],togeth:[17,18],token:[4,7,9,10],took:2,tool:[14,19],torn:2,total:[7,10],totaltim:2,trace:[4,10,12,22],traceid:[2,10,18],track:[0,1,2,4,10,11,12,13,14,21],tracker:[1,4,6,13,16,18,23],translat:[0,10],trigger:[0,6,12],troublesom:21,truthli:10,tutori:[19,23],two:[0,14,16,17,21],type:[0,5,10,13,14,21],uniqu:[11,15,18],unit:[11,13,14,21],unless:5,until:[9,13],upcom:21,updat:[0,2,5,11,13],upload:7,upon:14,url:[0,2,4,7,9,13,15,20,21],usag:[7,19,23],use:[0,1,4,5,7,9,10,12,14,15,20,21,22],used:[0,2,3,4,7,8,10,11,12,13,14,15,16,18,20,22],useful:[0,2,4,10,11,12,18,21],user:[2,9,14,15,21],useradd:15,usernam:9,uses:[4,21],using:[0,7,9,11,13,14,15,17,18,19,21],usual:[9,10,11,12,14,18],uuid:[0,4,7,9,11,13,14,21],valid:[1,2,7,14],valu:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,16,17,21,22],value1:[12,22],value2:22,vanish:4,vari:11,variabl:[0,5,7,13,14],variable_:0,varianc:8,varieti:21,variou:[0,1,11,14,15,20],verb:[0,2,4,9,13,21],verbos:[21,23],version:[7,11,15],via:[0,2,4,9,14,21,22],view:11,visibl:14,visualiz:18,wai:14,wait:[0,5,10,13,14,18,21],want:[0,1,2,11,14,20,21],warn:10,went:21,were:13,what:[14,15],when:[0,2,4,5,7,9,11,12,14,17,18,21],where:[1,7,10,11,20,21,22],which:[0,1,5,7,10,11,18,21,22],who:21,wich:9,wipe:9,within:[5,10,11,12],without:[7,8,11,14],won:10,workdir:13,would:21,write:[7,10,12,21],wrong:[4,21],xscale:[7,13],yaml:[15,16,20,21],yes:[0,8,10,13,14,20,21],yield:14,yml:[17,21],you:[0,1,2,4,5,7,9,10,11,14,15,18,19,20,21],your:[5,7,9,10,14,15,17,18,21,23],yscale:7,zero:2,zone:11},titles:["Channels","Event Filters","Event Reference","Indicators","Observers","Policies","Class Reference","Reporters","Summarizers","Tasks","Trackers","Postgres SQL Schema","Per-Class Configuration Statements","Configuration Example","Global Configuration Statements","Using Macros","Configuration","Separating Configuration Files","Architecture","Installation","Recipes","Tutorial","Usage","DC/OS Performance Test Driver"],titleterms:{"abstract":21,"class":[6,12],"default":15,"function":15,The:21,Using:15,_job:11,_job_meta:11,_job_phas:11,_lookup_metr:11,_lookup_paramet:11,_phase_flag:11,_phase_metr:11,_phase_param:11,app:20,architectur:18,arrai:17,auth:9,authe:9,authopen:9,black:21,box:21,builtinsummar:8,burstpolici:5,cascad:18,channel:[0,12,21],cmdlinechannel:0,config:14,configur:[12,13,14,16,17],counttrack:10,csvreport:7,data:20,datadogreport:7,date:15,ddl:11,defin:[14,22],definit:14,dictionari:17,driver:23,dumpmetrictrack:10,durationtrack:10,event:[1,2,18],eventattributetrack:10,evolut:21,exampl:13,file:17,filter:1,flag:11,format:15,global:14,http:9,httpchannel:0,httptimingobserv:4,includ:20,increas:21,index:11,indic:[3,14,18,23],instal:19,job:11,known:9,launch:20,loglineobserv:4,loglinetokentrack:10,lookup:11,macro:15,marathon:9,marathondeploychannel:0,marathoneventsobserv:4,marathonmetricsobserv:4,marathonpollerobserv:4,marathonupdatechannel:0,merg:17,meta:[14,22],metadata:[11,15],metric:[11,14,18,21],multivariableexplorerpolici:5,normalizedmaxmetricind:3,normalizedmeanmetricind:3,normalizedminmetricind:3,observ:[4,12,21],paramet:[11,14,21],part:20,per:12,perform:23,phase:[11,18],plot:20,plotreport:7,polici:[5,12],postgr:11,postgrestreport:7,process:18,queri:11,rawreport:7,recip:20,refer:[2,6,20],removeallapp:9,removegroup:9,removematchingapp:9,report:[7,12,21],request:9,result:[21,22],run:[14,21],s3report:7,schema:11,separ:17,sourc:15,sql:11,staletimeout:14,stat:21,statement:[12,14],summar:[8,18],tabl:[11,23],task:[9,12],terminolog:11,test:[18,20,21,23],timeevolutionpolici:5,timeseri:18,titl:14,tracker:[10,12,21],trigger:9,tutori:21,usag:22,uuid:15,valu:[15,18],verbos:22,your:20}})