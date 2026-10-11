export class DataUtil {

    static generateTimestamp(): string {
        return Date.now().toString();
    }

    static generateRepositoryName(): string {
        return `aiqe-capstone-${Date.now()}`;
    }
}