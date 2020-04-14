import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './static/reset.css'
import { Tabbar, Sidebar, ImagePreview, Overlay, Slider, Stepper, DatetimePicker, NoticeBar, Dialog, Notify, Grid, Loading, Image, GridItem, Uploader, SidebarItem, TabbarItem, Cell, AddressEdit, Area, List, CellGroup, Swipe, SwipeItem, PullRefresh, AddressList, Tab, Tabs, Button, Icon, Popup, Checkbox, CheckboxGroup, Field, RadioGroup, Tag, Radio, Search, Switch, SwipeCell, Toast, NavBar, Picker, ActionSheet, Sticky} from 'vant';
import 'vant/lib/index.css';

Vue.use(Tabbar).use(TabbarItem).use(Overlay).use(ImagePreview).use(Stepper).use(DatetimePicker).use(Slider).use(NoticeBar).use(Notify).use(Loading).use(Dialog).use(Image).use(Grid).use(GridItem).use(Uploader).use(Sidebar).use(SidebarItem).use(Cell).use(Area).use(AddressEdit).use(List).use(CellGroup).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Button).use(Icon).use(Popup).use(Checkbox).use(CheckboxGroup).use(Field).use(RadioGroup).use(Radio).use(Search).use(Switch).use(PullRefresh).use(SwipeCell).use(Toast).use(NavBar).use(Tag).use(AddressList).use(Picker).use(ActionSheet).use(Sticky);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


// 跳转路由
router.beforeEach((to, from, next)=>{
    // title
    if(to.meta && to.meta.title){ document.title = to.meta.title; }

    next();
})