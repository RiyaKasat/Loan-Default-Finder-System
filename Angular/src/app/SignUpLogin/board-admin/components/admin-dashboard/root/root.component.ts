import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminSettingsService } from '../../admin-services/settings.service';


@Component({
  selector: 'admin-app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class AdminRootComponent implements OnInit, OnDestroy {
  public id: number;
  public backgroundColor: string;
  constructor(public settingService: AdminSettingsService) {
    this.id = settingService.getSidebarImageIndex() + 1;
    this.backgroundColor = settingService.getSidebarColor();
  }

  ngOnInit() {
    this.settingService.sidebarImageIndexUpdate.subscribe((id: number) => {
      this.id = id + 1;
    });
    this.settingService.sidebarColorUpdate.subscribe((color: string) => {
      this.backgroundColor = color;
    });
  }

  ngOnDestroy() {
    this.settingService.sidebarImageIndexUpdate.unsubscribe();
    this.settingService.sidebarColorUpdate.unsubscribe();
  }
}
