import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command-service.service';
import { Command } from '../Command';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-getcommanduser',
  templateUrl: './getcommanduser.component.html',
  styleUrls: ['./getcommanduser.component.css']
})
export class GetcommanduserComponent implements OnInit {
  userCommands: Command[] = [];

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.getUserCommands();
  }

  getUserCommands(): void {
    this.commandService.getUserCommands().subscribe(
      (commands: Command[]) => {
        this.userCommands = commands;
      },
      (error) => {
        console.error('Error fetching user commands:', error);
      }
    );
  }
}