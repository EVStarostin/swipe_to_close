(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,i,a){e.exports=a(17)},,,,,,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var t=a(0),u=a.n(t),s=a(7),o=a.n(s),n=(a(14),a(1)),r=a(2),m=a(4),l=a(3),c=a(5);var d=function(e){return function(i){function a(e){var i;return Object(n.a)(this,a),(i=Object(m.a)(this,Object(l.a)(a).call(this,e))).handleTouchStart=function(e){i.isTargetScrollable=!!i.scrollableRef.contains(e.target),i.isFullyScrolled=i.scrollableRef.scrollHeight-i.scrollableRef.scrollTop===i.scrollableRef.clientHeight,i.startDiffY=e.touches[0].pageY,i.ref.style.transition="none"},i.handleTouchMove=function(e){i.diffY=e.touches[0].pageY-i.startDiffY,(!i.isTargetScrollable&&i.diffY>0||i.isTargetScrollable&&0===i.scrollableRef.scrollTop&&i.diffY>0||i.isTargetScrollable&&i.isFullyScrolled&&i.diffY<0)&&(i.isGesture=!0),i.isGesture&&i.scrollableRef.addEventListener("touchmove",i.preventDefault),i.isGesture&&i.diffY>0?i.ref.style.transform="translateY(".concat(i.diffY,"px)"):i.diffY=0},i.handleTouchEndOrCancel=function(e){var a=i.ref.clientHeight/3;i.diffY>a&&i.props.onClose(),i.diffY=0,i.ref.style.transform="",i.ref.style.transition="",i.isGesture=!1,i.scrollableRef.removeEventListener("touchmove",i.preventDefault)},i.preventDefault=function(e){e.preventDefault()},i.ref=null,i.setRef=function(e){i.ref=e},i.scrollableRef=null,i.setScrollableRef=function(e){i.scrollableRef=e},i.startDiffY=0,i.diffY=0,i.isGesture=!1,i.isTargetContent=!1,i}return Object(c.a)(a,i),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.ref.addEventListener("touchstart",this.handleTouchStart),this.ref.addEventListener("touchmove",this.handleTouchMove),this.ref.addEventListener("touchend",this.handleTouchEndOrCancel),this.ref.addEventListener("touchcancel",this.handleTouchEndOrCancel)}},{key:"componentWillUnmount",value:function(){this.ref.removeEventListener("touchstart",this.handleTouchStart),this.ref.removeEventListener("touchmove",this.handleTouchMove),this.ref.removeEventListener("touchend",this.handleTouchEndOrCancel),this.ref.removeEventListener("touchcancel",this.handleTouchEndOrCancel)}},{key:"render",value:function(){return u.a.createElement(e,Object.assign({},this.props,{setRef:this.setRef,setScrollableRef:this.setScrollableRef}))}}]),a}(u.a.Component)},p=(a(15),function(e){function i(e){var a;return Object(n.a)(this,i),(a=Object(m.a)(this,Object(l.a)(i).call(this,e))).close=function(){a.setState({open:!1}),a.afterClose()},a.unPinBody=function(){document.body.style.top="",document.body.classList.remove("page_tray_open"),window.scrollTo(0,a.pageScrollTop)},a.state={open:!1},a}return Object(c.a)(i,e),Object(r.a)(i,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&(this.props.open?this.open():this.close())}},{key:"render",value:function(){var e=this.props,i=e.children,a=e.renderHeader,t=e.onClose,s=e.setRef,o=e.setScrollableRef,n=this.state.open;return a&&({open:n,with_header:!1}.with_header=!0),u.a.createElement("div",{className:"news-tray ".concat(n?"news-tray_mode_open":"news-tray_mode_closed"," news-tray_with_header"),ref:s},u.a.createElement("div",{className:"news-tray__overlay"}),u.a.createElement("div",{className:"news-tray__container"},a&&a("news-tray__header"),u.a.createElement("button",{className:"news-tray__close",onClick:t}),u.a.createElement("div",{className:"news-tray__content",ref:o},i)))}},{key:"open",value:function(){this.beforeOpen(),this.setState({open:!0})}},{key:"beforeOpen",value:function(){this.pinBody()}},{key:"afterClose",value:function(){this.unPinBody()}},{key:"pinBody",value:function(){this.pageScrollTop=window.pageYOffset,document.body.style.top="".concat(-this.pageScrollTop,"px"),document.body.classList.add("page_tray_open")}}]),i}(u.a.PureComponent));p.defaultProps={deviceInfo:{OSFamily:""},onClose:function(){return null}};var q=d(p);a(16);function f(){return u.a.createElement("div",{className:"comments"},u.a.createElement("p",null,u.a.createElement("input",{className:"comments__input",type:"text"})),"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet deleniti eaque quidem adipisci expedita? Doloribus quidem reprehenderit tempora alias incidunt. Voluptates quidem ex cumque odio similique accusantium dolorem magnam inventore debitis porro voluptas quod voluptatibus, ut iure ducimus repellendus omnis, harum dolor dicta minus impedit! Fugit eius veniam quasi! Quos architecto rem nobis? Placeat repudiandae accusantium mollitia laborum iste nostrum minus voluptate, assumenda expedita, veritatis tempore est ipsa dicta? Repudiandae dolore nam officia perspiciatis amet? Eos sequi accusamus voluptas, modi corrupti eaque voluptate nisi! Laboriosam quam at sit voluptatem? Labore, ipsam voluptatibus animi, aut ab sequi aspernatur earum quas a libero iure excepturi explicabo reiciendis maiores repudiandae quos rem laudantium sunt fugiat vel illo? Dolorum reiciendis magni iure nemo tempore corporis eos minus ducimus laudantium soluta quasi hic corrupti ad dolorem nostrum officia quidem aliquam quae, ipsum doloremque placeat? Unde, aut quibusdam. Sit nostrum architecto amet, molestias explicabo est soluta voluptate asperiores repudiandae dolore maiores eos inventore similique sapiente saepe quod autem quos corrupti, aperiam, eaque laborum pariatur. Obcaecati, dignissimos non explicabo laboriosam enim, alias sequi quae est odit quaerat ipsum eos ut doloremque accusantium omnis! Quis, expedita. Quisquam magnam aspernatur, maxime possimus ipsa accusamus repudiandae nostrum deserunt veniam suscipit quas. Amet officiis omnis fugiat earum quasi repellendus sit, non totam alias quidem a magni error blanditiis quas! Quas, nam recusandae sapiente accusamus soluta natus ducimus harum dignissimos quia temporibus excepturi ipsa ipsum vero ipsam commodi consectetur facere eveniet, voluptate quo neque repudiandae error aliquam. Placeat explicabo nam accusamus consequatur corrupti, cum modi nobis ipsum sint necessitatibus saepe qui itaque laudantium eum assumenda aliquid dignissimos praesentium voluptate molestias suscipit aliquam totam. Natus amet pariatur cumque illo sapiente dolor accusantium voluptates expedita quas, at dolorem voluptate quia necessitatibus cum, vitae, quos labore alias consectetur culpa aliquam totam minima laboriosam a. Totam placeat repellendus excepturi numquam voluptatum non vero quo vitae consequatur laudantium perferendis iste officiis maxime cum omnis voluptates, blanditiis nobis cumque ab quod quisquam soluta! Voluptatum officiis ullam incidunt. Autem magnam iusto illum deleniti officia. Architecto deserunt saepe facere veritatis asperiores placeat adipisci, exercitationem laudantium similique explicabo! Laboriosam vel natus voluptate molestiae tempora animi culpa cupiditate repudiandae optio veritatis facilis voluptatem distinctio minima, illum sapiente fugit neque placeat consequuntur nesciunt ducimus? Sed repellendus necessitatibus aliquid fuga modi aut, ducimus eaque unde aliquam illum architecto facilis hic, iure expedita mollitia molestias distinctio veniam voluptatibus molestiae! At dolore ea recusandae pariatur deleniti facilis excepturi praesentium. Excepturi voluptas deserunt qui commodi, maxime nesciunt optio veniam quos corporis saepe accusantium consectetur eius laboriosam repellendus explicabo! Nisi, dicta! Ipsum quasi aperiam a beatae sequi suscipit perspiciatis ducimus soluta, distinctio officiis maxime esse fugit numquam ipsam cumque qui repudiandae quos culpa reprehenderit cupiditate eum. Sunt itaque fugit modi rerum similique suscipit dolorum deserunt sint iste, voluptatum consequuntur accusantium quisquam aliquam. Libero, placeat ex similique odit sunt animi. Ratione eius at ad corporis velit iure enim non quos ex magni consequuntur, modi deserunt. Ea aliquid distinctio dolore quo. Voluptatum, magni quam odio accusantium pariatur aspernatur in sed reiciendis doloribus delectus incidunt sit, minus consequatur quisquam quas quidem mollitia dolor tempora inventore! Sequi impedit odit corrupti dolorem totam neque ratione delectus numquam excepturi debitis distinctio amet eos, non odio dignissimos optio perspiciatis aspernatur facilis architecto officia soluta cupiditate! Non officia mollitia esse alias voluptas consequatur, optio nisi accusamus sint totam reiciendis quis! Esse aliquam deserunt error provident, dicta quia doloremque magni consectetur corrupti pariatur labore. Dolorum inventore exercitationem culpa facilis consequatur qui cupiditate eius doloremque est, tenetur quaerat minima tempora repellendus recusandae dolorem vero! Vero molestiae amet commodi, eius ducimus eum nihil illum, explicabo deserunt voluptas neque fuga corrupti assumenda! Aperiam, labore reprehenderit et recusandae commodi reiciendis quis voluptatibus ea dolorum tenetur totam sint inventore, maxime voluptate quod quidem officia? Dolorum, eum sapiente non modi at fuga nihil tempora pariatur asperiores sequi quam, magni odio cum impedit! Est quasi magnam animi delectus sapiente quod mollitia harum fugit eveniet perferendis dolores nam ea quidem, blanditiis eos expedita excepturi. Molestiae error tempore repudiandae quia iste, neque in blanditiis assumenda maiores eos excepturi repellat similique incidunt cupiditate sunt impedit eius delectus ut harum dolores facere hic alias libero magnam. Minus in non odit. Dicta, minus illo. Voluptate, quis perferendis aliquid repellat tempora nesciunt! Corporis rem soluta amet quam, distinctio, doloribus doloremque, assumenda ipsam modi atque obcaecati. Obcaecati hic dolores consectetur nemo praesentium reiciendis distinctio omnis iure vitae molestiae cupiditate facilis ducimus autem, commodi dolorem quis saepe ipsa laborum atque maiores voluptates doloribus voluptate aliquam vel. Magni quas sed nam incidunt error facere, numquam nihil cum facilis deleniti qui natus debitis dignissimos dolore id blanditiis maxime, ea omnis assumenda. Libero reiciendis id in placeat quaerat. Distinctio sapiente deserunt nihil cupiditate explicabo asperiores quo eligendi ratione, numquam sequi nobis eum, expedita eos fuga vitae non accusantium provident rerum ut modi accusamus eius laboriosam! Earum minima iure enim recusandae modi accusamus at tempore sit voluptas doloribus sapiente aperiam, sed repudiandae eum nostrum voluptates harum necessitatibus corporis? Ipsa nulla, odio qui voluptatibus necessitatibus vero neque aspernatur dolore natus accusantium omnis! Numquam in assumenda placeat odit voluptatibus quaerat temporibus vel suscipit illo dolore optio, quasi ad impedit excepturi asperiores tempora enim blanditiis laborum praesentium dolorum aspernatur reprehenderit natus vitae iure. Quis explicabo distinctio sequi eius corrupti, facilis dolor minus hic eveniet, a sapiente rem ex repellat recusandae voluptatum id? Animi illo repellendus quasi veritatis itaque vero, fuga officia reiciendis quas magni dolorum sint natus expedita ullam. Labore mollitia, tempore ipsum voluptatem nisi aliquid voluptas fugiat quaerat itaque possimus ullam voluptatibus inventore, nesciunt officia nihil, obcaecati autem aut ducimus ratione sit illum vitae porro explicabo fuga. Exercitationem itaque ex soluta numquam nihil. Ullam, temporibus molestiae qui fugit tempore possimus voluptas doloribus voluptatum quasi atque nostrum eligendi labore aspernatur dolores voluptate iure molestias! Sed optio assumenda hic nisi voluptate cum, ducimus molestias accusantium corporis ab saepe perspiciatis. Accusantium, molestias nulla, praesentium excepturi saepe ratione architecto nostrum eveniet quos voluptatibus nisi pariatur fugiat natus esse numquam. Necessitatibus placeat molestiae error incidunt! Architecto exercitationem, delectus provident temporibus autem corrupti animi.")}var b=function(e){function i(e){var a;return Object(n.a)(this,i),(a=Object(m.a)(this,Object(l.a)(i).call(this,e))).handleClick=function(){console.log("open"),a.setState({trayOpen:!0})},a.handleClose=function(){console.log("close"),a.setState({trayOpen:!1})},a.state={trayOpen:!1},a}return Object(c.a)(i,e),Object(r.a)(i,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"App"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptatibus itaque illum possimus, omnis voluptates dolor eos reiciendis, magni ipsam laboriosam. Fugiat eum non maxime. Dolorem odit voluptatibus, autem dolor labore sapiente alias aliquid similique excepturi ab, quia accusantium unde beatae asperiores tempore fugiat atque molestias ipsum, modi officia est ullam. Perspiciatis eius aspernatur quo sit temporibus laudantium cumque, est necessitatibus similique earum eum nemo quia culpa quas voluptate hic eaque architecto ut? Distinctio laboriosam, quis placeat rerum veritatis error nesciunt ex accusantium harum, temporibus quos nobis facere? A nihil consequuntur id nulla, eveniet exercitationem optio fugiat facilis repellendus, quis porro explicabo fugit doloremque vitae magni at officiis aliquam? Dignissimos esse quae commodi eveniet ut culpa maiores suscipit adipisci consequuntur reiciendis vero, dolorum delectus aut temporibus soluta. Eaque delectus earum consectetur soluta? Voluptatibus perspiciatis at, eligendi, est odio dicta neque iure, quae minus eveniet quam ea asperiores dolor recusandae earum! Dolor perferendis reprehenderit reiciendis nihil asperiores iusto quisquam, impedit beatae incidunt saepe qui dolore tenetur, aperiam nisi accusamus, inventore voluptatem totam explicabo modi voluptates facilis recusandae debitis adipisci. Maxime velit ipsa iusto recusandae cupiditate repellat fugit amet nulla et at harum ducimus dicta accusantium eveniet assumenda quis ipsam corporis, placeat autem pariatur temporibus ut maiores doloribus! Fuga sunt magnam deserunt error modi officia, cum ipsum distinctio eum culpa repellat laboriosam sit sint magni quisquam consequuntur nulla aut illo id dolorem inventore soluta doloribus earum. Laboriosam explicabo eos non recusandae tempora, mollitia autem sequi libero, nesciunt, labore consequuntur? Ut, modi dolor repellat molestias fuga, minus inventore corporis nulla quos nam quo itaque commodi at! Rem voluptatum distinctio in fugiat ad ducimus qui numquam neque laborum dolores laudantium impedit repellat veritatis consectetur alias quibusdam facilis recusandae voluptate nulla mollitia repudiandae dignissimos, nobis quod? Fuga saepe, est quis culpa impedit vel consequatur sequi id. Delectus, nobis deleniti modi quis, dicta non magni eligendi quia magnam illo labore asperiores id optio ut molestiae quaerat architecto possimus sequi vitae dolore blanditiis. Impedit saepe dolorem maxime recusandae, repellendus beatae provident exercitationem eos unde. Impedit, cupiditate facere. Ut odit rerum beatae nisi. Quidem maiores quas nesciunt, repellendus officiis, maxime commodi asperiores cupiditate amet fuga corrupti aperiam sit nulla itaque voluptate officia vitae reprehenderit, esse tempora ut laboriosam doloribus numquam eligendi? Rem maiores fugit similique eaque provident laborum tempora ducimus libero. Aperiam perspiciatis, nisi molestiae dicta facilis, atque libero neque placeat eaque enim et accusamus unde minus magnam. Fugit excepturi quos ea. Tempora alias autem est? Reiciendis, molestiae voluptates modi aliquid ullam temporibus accusantium quas quasi, voluptatem optio fuga esse, accusamus voluptas consequuntur velit placeat? Facilis et aperiam autem ipsam molestiae in doloremque adipisci quia possimus incidunt reprehenderit ullam quasi quam fugiat, assumenda voluptatibus natus quos ipsum modi alias. Facere sequi repellat voluptatum fuga totam optio iure labore, consequuntur placeat error quam temporibus eaque? Atque laudantium corporis eum ipsa doloribus optio inventore quam delectus suscipit harum necessitatibus dignissimos, nihil hic vitae. Eligendi atque fuga alias, eos quas ipsum. Recusandae quos enim, reiciendis facere nisi amet eligendi expedita a consequatur reprehenderit praesentium, officia odit quasi eaque. Repellendus, iste. Sunt sit possimus, nesciunt deleniti mollitia totam a labore blanditiis error magnam maiores sint atque obcaecati ipsam molestiae! Ea asperiores, tempora facilis, odio iste sequi similique consequatur, assumenda neque dolor nam nihil nostrum labore mollitia beatae quas qui praesentium maxime pariatur nulla. Doloribus, dolorum hic? Ipsum, laudantium in libero quod illo at quis blanditiis rem aliquid expedita voluptate, velit, enim magnam. Neque quas delectus iure eaque temporibus soluta cumque cum tempore qui, illo sunt veritatis labore esse at facilis ullam nostrum a earum deleniti quae dolorum minima dolores quidem? In dolorem itaque eum minus natus, deleniti nisi laborum omnis quidem saepe tempora porro eligendi? Modi esse optio ab earum mollitia eius? Ullam, aliquam? Accusantium illo doloribus vel, eius ullam consequuntur beatae dolor numquam, repudiandae deserunt ad cum at facere. Maxime quia impedit, in voluptatibus ipsum placeat? Minima nostrum facere praesentium ut distinctio voluptatum assumenda sapiente dolorem minus consequuntur nam, similique qui? Ad, necessitatibus ducimus. Dolore, debitis? Unde magnam architecto cupiditate id provident corrupti. Repellendus reprehenderit odio, sint iure tempora deleniti adipisci quia, aspernatur ad tenetur minima porro eligendi voluptates sit eos corrupti veniam. Deserunt corporis consectetur commodi neque sunt minus. Quisquam, illo. Maiores asperiores animi, ipsa fugiat sapiente obcaecati sequi velit eum nostrum nemo numquam in porro mollitia adipisci error recusandae quisquam nam! Aspernatur nam inventore libero laborum. Aliquid nostrum, illo sit sunt veritatis quibusdam sed necessitatibus non excepturi iusto asperiores ducimus voluptate, quidem praesentium accusantium rem obcaecati sapiente animi vel quam, harum labore ex! Doloribus earum eveniet similique totam maxime dolorum eius sequi a, vitae mollitia quam, optio, perspiciatis tenetur ad? Corporis dolorum quibusdam nemo a, impedit asperiores quas rem beatae esse corrupti! Recusandae velit magni repellendus aliquam odio aut unde doloribus adipisci ipsa quis, aspernatur soluta voluptatum quod dicta quo temporibus? Quo debitis sunt cupiditate deleniti perferendis nostrum velit laudantium laboriosam vel odit. Suscipit dolorem officiis repellat eaque commodi possimus vero aliquam aperiam unde? In unde ex rem pariatur necessitatibus eos tenetur eum assumenda quam dolorem, corrupti dignissimos vel rerum non vitae commodi consequatur deserunt, molestias, placeat quas? Quam, nesciunt doloremque nisi temporibus dignissimos eaque vero cum suscipit corporis nobis magni reiciendis velit debitis quis perspiciatis consequatur. Explicabo exercitationem consequuntur laboriosam culpa aperiam sed eius esse, ducimus itaque nisi assumenda, fugit minima. Pariatur, error distinctio praesentium voluptas ullam magni mollitia, omnis eius numquam sed nesciunt reprehenderit maiores quis, quos enim fuga repudiandae voluptatum architecto hic consequatur eaque at. Velit voluptas temporibus vitae, tenetur fuga accusamus voluptatem dignissimos aut reprehenderit accusantium quisquam odit modi exercitationem rerum veniam aliquid veritatis incidunt, possimus minima mollitia est repellendus sint neque labore! Quia ullam molestiae nisi eaque iure repellendus fugit vel rerum provident ratione aperiam magni, debitis adipisci, quibusdam amet omnis possimus velit delectus. Quis qui architecto, nobis impedit dolores corrupti aut, enim deserunt animi harum, repellat eaque error rem necessitatibus! Voluptatum ratione dolores labore perspiciatis commodi iste consectetur quaerat deleniti facilis accusantium, sint rem aliquid nisi nihil sapiente temporibus excepturi officiis fuga. Delectus?",u.a.createElement(q,{renderHeader:function(i){return u.a.createElement("div",{className:"header ".concat(i)},u.a.createElement("button",{className:"header__open",onClick:e.handleClick},"open"))},onClose:this.handleClose,open:this.state.trayOpen},u.a.createElement(f,null)))}}]),i}(u.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(u.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.f097c674.chunk.js.map