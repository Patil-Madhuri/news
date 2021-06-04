import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  searchForm: FormGroup;
  contactsList = [];
  slicedContactList = [];
  scrollDistance = 1;
  scrollThrottle = 50;

  constructor(private httpService: HttpService,
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getNews();
  }


  getNews() {
    this.spinnerService.show();
    var contentBody = { url: "https://hacker-news.firebaseio.com/v0/topstories.json", body: {} }
    this.httpService.httpGet(contentBody).subscribe(response => {
      console.log(response);
      response.forEach(element => {
        var contentBody = { url: "https://hacker-news.firebaseio.com/v0/item/" + element + ".json", body: {} }
        this.httpService.httpGet(contentBody).subscribe(result => {
          this.contactsList.push(result);
          this.slicedContactList = this.contactsList.slice(0, 10);
          this.spinnerService.hide();
        })
      })
    }, error => {
      this.spinnerService.hide()
    })
  }

  onScrollDown() {
    if (this.slicedContactList.length === this.contactsList.length) {
      console.log("Nothing to do");
      return
    }
    else if (this.slicedContactList.length <= this.contactsList.length) {
      let len = this.slicedContactList.length;
      for (let i = len; i <= len + 3; i++) {
        this.slicedContactList.push(this.contactsList[i]);
      }
    }
  }

  redirect() {
    this.router.navigate(['account-details'])
  }
}
