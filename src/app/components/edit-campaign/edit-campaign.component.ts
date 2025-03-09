import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss'],
})
export class EditCampaignComponent implements OnInit {
  @Input() set campaign(value: Campaign | null) {
    if (value) {
      this._campaign = value;
      this.campaignsBuildForm();
    }
  }
  get campaign(): Campaign | null {
    return this._campaign;
  }

  get title() {
    return this.editForm.get('title');
  }
  get description() {
    return this.editForm.get('description');
  }

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Campaign>();

  editForm!: FormGroup;
  submitted = false;
  _campaign: Campaign | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.campaignsBuildForm();
  }

  campaignsBuildForm() {
    this.editForm = this.fb.group({
      title: [this.campaign?.title || '', [Validators.required]],
      description: [this.campaign?.description || '', [Validators.required]],
    });
  }

  campaignsModalClose() {
    this.submitted = false;
    this.editForm.reset();
    this._campaign = null;
    this.close.emit();
  }

  campaignsModalSave() {
    this.submitted = true;

    if (this.editForm.valid && this.campaign) {
      const updatedCampaign: Campaign = {
        ...this.campaign,
        title: this.editForm.value.title,
        description: this.editForm.value.description,
      };
      this.save.emit(updatedCampaign);
      this.campaignsModalClose();
    }
  }

  getFormError(fieldName: string): boolean {
    const field = this.editForm.get(fieldName);
    return field
      ? field.invalid && (field.dirty || field.touched || this.submitted)
      : false;
  }
}
