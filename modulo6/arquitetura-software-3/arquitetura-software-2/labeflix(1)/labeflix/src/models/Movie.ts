export class Movie {
    constructor(
      private id: string,
      private title: string,
      private description: string,
      private durationInMinutes: number,
      private yearOfRelease: number
    ) { }

    getId() {
      return this.id
    }
  
    getTitle() {
      return this.title
    }
  
    getDescription() {
      return this.description
    }
  
    getDuration_in_minutes() {
      return this.durationInMinutes
    }

    getYear_of_release() {
        return this.yearOfRelease
      }
  
    setId(newId: string) {
      this.id = newId
    }
  
    setTitle(newTitle: string) {
      this.title = newTitle
    }
  
    setDescription(newDescription: string) {
      this.description = newDescription
    }
  
    setDuration_in_minutes(newDurationInMinutes: number) {
      this.durationInMinutes = newDurationInMinutes
    }

    setYear_of_release(newYearOfRelease: number) {
        this.yearOfRelease = newYearOfRelease
    }

  }
  