import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-delete-campaign',
  templateUrl: './delete-campaign.component.html',
  styleUrls: ['./delete-campaign.component.scss'],
})
export class DeleteCampaignComponent {
  @Input() campaign: Campaign | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<string>();

  closeDeleteModal() {
    this.close.emit();
  }

  deleteCampaignItem() {
    if (this.campaign) {
      this.confirm.emit(this.campaign.id);
    }
  }
}
