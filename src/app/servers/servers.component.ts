import { Component, OnInit } from '@angular/core';
// import { ServersService } from '@angular/router';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    // this.servers = this.serversService.getServers();
  }
  onReload() {
    //  this.router.navigate(['/servers'], {relativeTo: this.route});
  }

}
