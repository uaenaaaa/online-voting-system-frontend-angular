import { Component } from '@angular/core';
import { NavbarComponent } from '@app/shared/ui/user/navbar/navbar.component';

@Component({
	selector: 'app-voting-status',
	standalone: true,
	imports: [NavbarComponent],
	templateUrl: './voting-status.component.html',
	styleUrl: './voting-status.component.scss',
})
export class VotingStatusComponent {}
