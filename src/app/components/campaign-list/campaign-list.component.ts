import { Component, OnInit } from '@angular/core';
import { Campaign } from '../../models/campaign.model';
import { CampaignService } from '../../services/campaign.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent implements OnInit {
  campaigns: Campaign[] = [];
  selectedCampaign: Campaign | null = null;
  campaignToDelete: Campaign | null = null;

  constructor(
    private campaignService: CampaignService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.getCampaignsDataList();
  }

  getCampaignsDataList() {
    this.campaigns = this.campaignService.getCampaigns();
  }

  updatePoints(campaign: Campaign, increment: boolean) {
    campaign.points += increment ? 1 : -1;
    this.campaignService.updateCampaign(campaign);
  }

  openEditModal(campaign: Campaign) {
    this.selectedCampaign = { ...campaign };
  }

  editModalClose() {
    this.selectedCampaign = null;
  }

  editModalSave(updatedCampaign: Campaign) {
    try {
      this.campaignService.updateCampaign(updatedCampaign);
      this.getCampaignsDataList();
      this.selectedCampaign = null;
      this.toastService.showSuccess('Kampanya başarıyla güncellendi');
    } catch (error) {
      this.toastService.showError('Kampanya güncellenirken bir hata oluştu');
    }
  }

  openDeleteModal(campaign: Campaign) {
    this.campaignToDelete = campaign;
  }

  deleteModalClose(): void {
    this.campaignToDelete = null;
  }

  deleteCampaignItem(id: string) {
    this.campaignService.deleteCampaign(id);
    this.getCampaignsDataList();
    this.campaignToDelete = null;
    this.toastService.showSuccess('Kampanya başarıyla silindi');
  }
}
