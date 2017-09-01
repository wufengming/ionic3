import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, Content} from 'ionic-angular';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'contacts'
})
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  @ViewChild(Content) content: Content;
  /*搜索关键字*/
  searchInput:string;
  /* 请求通讯的值*/
  contatsUrl='assets/data/contacts.json';

  aLetter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  letters=[];
  formatContacts:any=[];
  searchingItems=[]; //搜索结果集
  searchLetters=[];
  isSearching=false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              //public myhttp:HttpService,
              public elementRef:ElementRef) {

    /*获取数据*/
    // myhttp.httpGetWithAuth(this.contatsUrl).subscribing(result=>{
    //   this.aLetter.forEach((res,index)=>{
    //     if(result[res]&&result.length!=0){
    //       this.formatContacts.push(result[res]);
    //       this.letters.push(res);
    //     }
    //   })
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }


  /*取消结果触发的值*/
  onCancelSearch(event){
    this.isSearching=false;
    this.searchingItems=[];
  }

  /**
   *定位查找首字母对应的通讯录
   * @param event
   */
  scrollToTop(letter:any){
    //this.tip.sh
    let scrollTop=this.elementRef.nativeElement.querySelector('ion-item-divider#'+letter).offsetTop;

    this.content.scrollTo(0,scrollTop,300);

  }

  /*通过关键字查找搜索的结果值*/
  goSearchResult(ev:any){
    this.isSearching=true;
    let val=ev.target.value;
    this.searchInput=val;

    if(val && val.trim()!=''){
      this.searchLetters=[];
      this.searchingItems=[];
      this.letters.forEach((res,index)=>{
        let search=this.formatContacts[index].filter((item)=>{
          return (item.userName.indexOf(val)>-1);
        });
        if(search!=null && search.length>0){
          this.searchLetters.push(res);
          this.searchingItems.push(search);
        }
      })
    }else {
      this.isSearching=false;
    }
  }

}
