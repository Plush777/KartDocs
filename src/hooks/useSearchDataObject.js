export default function useSearchDataObject (data, type, optionalData) {
    return {
        data: data,
        type: type == null || type === '' || !type ? undefined : type,
        optionalData: optionalData == null || optionalData === '' || !optionalData ? undefined : optionalData
    }
}