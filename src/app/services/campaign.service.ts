import { Injectable } from '@angular/core';
import { Campaign } from '../models/campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private readonly STORAGE_KEY = 'campaigns';

  getCampaigns(): Campaign[] {
    const campaigns = localStorage.getItem(this.STORAGE_KEY);
    return campaigns ? JSON.parse(campaigns) : [];
  }

  addCampaign(campaign: Campaign) {
    const campaigns = this.getCampaigns();
    campaigns.push({ ...campaign, id: Date.now().toString() });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(campaigns));
  }

  updateCampaign(campaign: Campaign) {
    const campaigns = this.getCampaigns();
    const index = campaigns.findIndex((c) => c.id === campaign.id);
    if (index !== -1) {
      campaigns[index] = campaign;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(campaigns));
    }
  }

  deleteCampaign(id: string) {
    const campaigns = this.getCampaigns();
    const filteredCampaigns = campaigns.filter((c) => c.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredCampaigns));
  }
}
