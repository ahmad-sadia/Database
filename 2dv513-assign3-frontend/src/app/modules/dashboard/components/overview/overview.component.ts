import {Component, OnInit} from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects/projects.service';
import { AccountService } from 'src/app/shared/services/account/account.service';

class Tile {
  id: string;
  name: string;
  title: string;
  footer: string;
  loading = true;
  value: string;

  url: string;
  icon: string;
  backgroundColor: string;
  count = 0;
}


@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  items: Tile[] = [];

  constructor(
    private projectsService: ProjectsService,
    private accountService: AccountService,
  ) {
    this.addProjects();
    this.addMonthHours()
  }

  addProjects() {
    const tile = new Tile();
    tile.title = 'Projects'
    tile.name = 'projects'
    tile.icon = 'apps'
    tile.url = 'projects'
    tile.footer = 'Total projects'
    this.items.push(tile)
  }

  addMonthHours() {
    const tile = new Tile();
    tile.title = 'Hours'
    tile.name = 'currentHours'
    tile.icon = 'timelapse'
    tile.footer = 'Current hours'
    this.items.push(tile)
  }

  ngOnInit(): void {
    this.getProjects()
    this.getCurrentHours()
  }

  getProjects(): void {
    this.projectsService.getTotal().subscribe(
      (data) => {
        this.updateProjects(data);
      },
      (error) => {
      }
    );
  }

  getCurrentHours(): void {
    this.accountService.getCurrentHours().subscribe(
      (data) => {
        this.updateCurrentHours(data);
      },
      (error) => {
      }
    );
  }

  updateProjects(data) {
    const tile = this.items.find(m => m.name === 'projects');
    tile.value = data.total
    tile.loading = false
  }

  updateCurrentHours(data) {
    const tile = this.items.find(m => m.name === 'currentHours');
    tile.value = data.hours
    tile.loading = false
  }
}

