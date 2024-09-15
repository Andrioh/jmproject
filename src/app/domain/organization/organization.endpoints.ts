import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization.models';

@Injectable({
	providedIn: 'root'
})
export class OrganizationsEndpoint {

	httpClient = inject(HttpClient);

	// constructor(private httpClient: HttpClient) {
	// }

	getOrganizations(): Observable<Organization[]> {
		return this.httpClient.get<Organization[]>("https://localhost:7012/api/Organization/andrioh");
		// const simounao = Math.floor(Math.random() * 10) % 2 == 0;

		// const items: Organization[] = [1, 2, 3, 4].map(x => {
		// 	const org = new Organization();
		// 	org.id = x;
		// 	org.name = `Organization ${x}`;

		// 	return org;
		// });

		// return of(simounao ? items : []);
	}

}
