import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";
import { FaceSnapsService } from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: 'single-face-snap.component.html',
  styleUrls: ['single-face-snap.component.sass']
})
export class SingleFaceSnapComponent implements OnInit {
  buttonText!: string;
  faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap !';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, unSnap !';
    } else {
      this.faceSnapService.unsnapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oh Snap !';
    }
  }
}
