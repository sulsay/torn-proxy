import Key from '../interfaces/Key';
import KeyRecord from '../interfaces/KeyRecord';

export default () => {
    return {
        convertKeyRecordToEntity(record: KeyRecord): Key {
            return {
                key: record.key,
                userId: record.user_id,
                permissions: record.permissions,
                description: record.description,
                createdAt: new Date(record.created_at),
                revokedAt: record.revoked_at ? new Date(record.revoked_at) : null,
            };
        }
    }
}
