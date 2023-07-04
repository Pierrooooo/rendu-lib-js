class FestivalAPI {
    constructor() {
      this.baseURL = 'https://data.culture.gouv.fr/api/records/1.0/search/';
    }
  
    async getFestivalsByRegion(region) {
      const url = `${this.baseURL}?dataset=panorama-des-festivals&facet=region&refine.region=${region}`;
      return this.fetchData(url);
    }
  
    async getFestivalsByDepartement(departement) {
      const url = `${this.baseURL}?dataset=panorama-des-festivals&facet=departement&refine.departement=${departement}`;
      return this.fetchData(url);
    }
  
    async getFestivalsByCommune(commune) {
      const url = `${this.baseURL}?dataset=panorama-des-festivals&facet=commune&refine.commune=${commune}`;
      return this.fetchData(url);
    }
  
    async getFestivalsByDate(dateDebut, dateFin) {
      const url = `${this.baseURL}?dataset=panorama-des-festivals&facet=date_debut&refine.date_debut=${dateDebut}&refine.date_fin=${dateFin}`;
      return this.fetchData(url);
    }
  
    async getFestivalsByThematique(thematique) {
      const url = `${this.baseURL}?dataset=panorama-des-festivals&facet=thematique&refine.thematique=${thematique}`;
      return this.fetchData(url);
    }
  
    async getFestivalsByDomaine(domaine) {
      const url = `${this.baseURL}?dataset=panorama-des-festivals&facet=domaine&refine.domaine=${domaine}`;
      return this.fetchData(url);
    }
  
    async fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
        throw error;
      }
    }
}
  
    module.exports = FestivalAPI;