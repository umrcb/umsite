import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IAuditLog extends Document {
    action: string;
    entity: string;
    entityId?: string;
    details?: string;
    user: string;
    timestamp: Date;
}

const auditLogSchema = new Schema<IAuditLog>({
    action: { type: String, required: true },
    entity: { type: String, required: true },
    entityId: { type: String },
    details: { type: String },
    user: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

// Use existing model if it exists, otherwise create it
export const AuditLog: Model<IAuditLog> = mongoose.models.AuditLog || mongoose.model<IAuditLog>('AuditLog', auditLogSchema);
