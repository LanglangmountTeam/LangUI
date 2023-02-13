import { App } from "vue";
import lbutton from './lbutton/lbutton.vue';
import licon from './licon/licon.vue';
import ltable from './ltable/ltable.vue';
import lgrid from './lgrid/lgrid.vue';
import mrow from './lgrid/mrow.vue';
import lprogress from './lprogress/lprogress.vue';
import ldivider from './ldivider/ldivider.vue';
import ldrawer from './drawer/index.vue'
import lmessage from './message/index.vue'
import ldropdown from './dropDown/index.vue'
import lbreadcrumbitem from './breadcrumb/breadcrumb-item.vue'
import lbreadcrumb from './breadcrumb/breadcrumb.vue'
const allcom=[
	lbutton,
	licon,
	ldrawer,
	lmessage,
	ldropdown,
	ltable,lgrid,
	mrow,
	lprogress,
	ldivider,
	lbreadcrumb,
	lbreadcrumbitem
]

const recom =function(app:App){
	for(const allco of allcom){
		app.component(allco.name,allco)
	}
};
export {lbutton,licon,ldrawer,lmessage,ldropdown,ltable,lgrid,mrow,lprogress,ldivider,lbreadcrumb,lbreadcrumbitem};
export default recom;