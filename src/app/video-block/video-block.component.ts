import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.less']
})
export class VideoBlockComponent implements OnInit {
   heading = 'Moment for meething with Two Pillers';
   src : any;
   chat : any;
   result : any;
   hide = false;
   errorText: any;
   error = false;
   sortArry : any;
  constructor(private route:ActivatedRoute,private router:Router, private http : HttpClient) { }

  ngOnInit() {
    let currentUrlPath = location.search.slice(1).split('=')[1];
    if (!currentUrlPath) {
        window.location.href = 'http://localhost:4200/?id=4d79041e-f25f-421d-9e5f-3462459b9934'
    }
    this.src = `https://static.chorus.ai/api/${currentUrlPath}.mp4`;
    //this.http.get(`assets/test.json`).subscribe((res) => {
        this.http.get(`/post/?id=${currentUrlPath}`).subscribe((res)=> {
        if (!res['error']) {
            this.chat = res;
            this.result = this.chat.sort((a, b) => {
                return <any > a.time - < any > b.time;
            });
            this.utteranceSeq(this.result);

        } else {
            this.error = true;
            this.chat = res;
            console.log(this.chat.error._text)
            this.errorText = this.chat.error._text
        }

    });

}
play() {
    let video = < HTMLVideoElement > document.getElementById('video');
    video.setAttribute('controls', 'true');
    video.play();
    this.hide = true;
}
ngAfterViewInit() {

    let video = < HTMLVideoElement > document.getElementById('video');
    let i = document.querySelector('#video + i');
    video.addEventListener('error', (event) => {
        console.log(event.type)
        video.setAttribute('poster', 'assets/img/no-video.gif');
        video.removeAttribute('controls');
        i.remove();
    }, true);

}
utteranceSeq(result) {
    let combineArray = []
    let a = [];
    let tempValue = result[0].speaker;
    let i = 1;
    result.forEach(function(item, index, arr) {
        if (tempValue == item.speaker) {
            a.push(item);
            if (i == arr.length) {
                combineArray.push(a);
            }
        } else {
            tempValue = item.speaker;
            combineArray.push(a);
            a = [];
            a.push(item);
            if (i == arr.length) {
                combineArray.push(a);
            }


        }
        i++
    });
    this.combineArray(combineArray);


}
combineArray(combineArray) {
    var merge = [];
    combineArray.forEach((outerItem) => {
        var output = [];
        var i = 0;
        outerItem.forEach(function(item) {
            var existing = output.filter(function(ele, i) {
                return ele;
            });
            if (existing.length) {
                var existingIndex = output.indexOf(existing[0]);
                output[existingIndex].snippet = output[existingIndex].snippet.concat(item.snippet);
            } else {
                if (typeof item.snippet == 'string')
                    item.snippet = [item.snippet];
                output.push(item);
            }
        });

        merge.push(output);
    });

    this.result = merge.map((element) => {
        let j = element[0].snippet;
        let r = j.join(' ')
        element[0].snippet = r;
        return element;
    });

}
ngOnDestroy() {}

}
